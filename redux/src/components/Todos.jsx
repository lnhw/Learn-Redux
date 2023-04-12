import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { markCompleteAction, deleteTodo, getTodos } from "../Stores/actions/todosAction";
const Todos = (props) => {
    const { getTodos, todos, markCompleteAction, deleteTodo } = props;
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        {todo.title}
                        <input type="checkbox" onChange={markCompleteAction.bind(this, todo.id)} />
                        <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

//
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markCompleteAction: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, { getTodos, markCompleteAction, deleteTodo })(Todos);