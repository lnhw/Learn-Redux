import React, { useState, useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { addTodo } from "../Stores/actions/todosAction"

const TodoForm = (props) => {
    const { addTodo } = props;
    const [title, setTitle] = useState(" ");

    // Memoize the onTitleChange function using useCallback
    const onTitleChange = useCallback(event => {
        setTitle(event.target.value);
    }, []);

    // Memoize the newTodo object using useMemo
    const newTodo = useMemo(() => {
        return {
            id: uuidv4(),
            title,
            completed: false,
        }
    }, [title]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (title !== "") {
            addTodo(newTodo)
            setTitle("")
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                onChange={onTitleChange}
            />
            <input type="submit" value="ADD" />
        </form>
    );
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { addTodo })(TodoForm);
