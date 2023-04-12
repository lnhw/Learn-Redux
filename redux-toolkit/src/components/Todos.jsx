import React from 'react'
import { todosSelector } from '../store/reducers/todosSlice';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';
const Todos = () => {
    const todos = useSelector(todosSelector);
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul style={{ listStyle: "none" }}>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            {todo.title}
                            <button>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Todos;
