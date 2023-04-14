import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
const todosSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // addTodo: (state, action) => {
        //     state.allTodos.unshift(action.payload)
        // },
        // prepare(title) {
        //     return {
        //         payload: {
        //             id: nanoid(),
        //             title,
        //             completed: false,
        //         }
        //     }
        // },
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.allTodos.unshift(newTodo);
            state.count++;
        },
        markCompleted: (state, action) => {
            const todoId = action.payload
            state.allTodos = state.allTodos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
                return todo;
            })
        },
        deleteTodo: (state, action) => {
            const todoId = action.payload
            state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
        },
    },
    extraReducers: (buider) => {
        buider
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'successeded';
                state.allTodos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }

});
// Reducer
export const todosReducer = todosSlice.reducer
// Selector
export const todosSelector = state => state.todosReducer.allTodos
//Action export
export const { addTodo, markCompleted, deleteTodo } = todosSlice.actions