import { combineReducers } from "redux";
import todoReducer from "./todosReducer";

const rooReducer = combineReducers({
    myTodos: todoReducer,
})
export default rooReducer;