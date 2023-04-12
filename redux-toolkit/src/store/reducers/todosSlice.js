import { createSlice, nanoid } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [
            {
                id: 1,
                title: "Viect 1",
                completed: false,
            },
            {
                id: 2,
                title: "Viect 2",
                completed: false,
            },
            {
                id: 3,
                title: "Viect 3",
                completed: false,
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.unshift(action.payload)
        },
        prepare(title) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    completed: false,
                }
            }
        }
    }
});
// Reducer
export const todosReducer = todosSlice.reducer
// Selector
export const todosSelector = state => state.todosReducer.allTodos
//Action export
export const { addTodo } = todosSlice.actions