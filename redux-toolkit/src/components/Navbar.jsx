import React from 'react'
import { todosSelector } from '../store/reducers/todosSlice';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const todos = useSelector(todosSelector);
    return (
        <div className='navbar'>
            <h1>My Redux App Todos</h1>
            <ul style={{ listStyle: "none" }}>
                <li>Totoal Todo:{todos.length}</li>
            </ul>
        </div>
    )
}
export default Navbar
