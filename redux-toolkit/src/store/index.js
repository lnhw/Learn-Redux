
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducers/todosSlice";
// initialStore
const store = configureStore({
    reducer: {
        todosReducer
    }
})
// export 
export default store
