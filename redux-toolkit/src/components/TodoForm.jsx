import React, { useState } from 'react';
import { addTodo } from "../store/reducers/todosSlice";
import { useDispatch } from 'react-redux';
const TodoForm = () => {
    const [title, setTitile] = useState("");
    const dispatch = useDispatch();
    function handleChangeTitile(event) {
        setTitile(event.target.value);
    }
    function handleAddTodo(event) {
        event.preventDefault();
        dispatch(addTodo(title))
        setTitile("");
    }
    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" value={title} onChange={handleChangeTitile} />
            <input type="submit" value="ADD" />
        </form>
    )
}

export default TodoForm
