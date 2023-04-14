import React, { useState, useCallback, useEffect } from 'react';
import { markCompleted, todosSelector, deleteTodo, fetchTodos } from '../store/reducers/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';

const Todos = () => {
    const todos = useSelector(todosSelector);
    const dispatch = useDispatch();
    const [todoCount, setTodoCount] = useState(todos.length);
    const [isHovered, setIsHovered] = useState(false);
    const toggleTodoComp = todoId => {
        //console.log(todoId);w
        dispatch(markCompleted(todoId));
    };

    const handleAddTodo = useCallback(() => {
        setTodoCount(todoCount + 1);
    }, [todoCount]);
    const completedStyle = {
        backgroundColor: "red",
    }
    const handleDeleteSingleTodole = todoId => {
        dispatch(deleteTodo(todoId));
    }
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])
    return (
        <div className='todo-list'>
            <TodoForm onAddTodo={handleAddTodo} />
            <ul style={{ listStyle: "none" }}>
                {todos.map(todo => {
                    return (
                        <li
                            key={todo.id}
                            // className={todo.completed ? completed : ''}
                            style={todo.completed ? completedStyle : null}
                        >
                            {todo.title}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={toggleTodoComp.bind(this, todo.id)}
                            />
                            <button
                                style={{ backgroundColor: isHovered === todo.id ? "red" : null }}
                                onMouseEnter={() => setIsHovered(todo.id)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={handleDeleteSingleTodole.bind(this, todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};
export default Todos;

