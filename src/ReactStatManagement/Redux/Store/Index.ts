import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ToDo } from "../types";

const todoArray: Array<ToDo> = []
const storeTodo = createSlice({
    name: "storeTodo",
    initialState: { todoArray },
    reducers: {
        createTodo(state, action) {
            state.todoArray.push({ todo: action.payload })
            console.log(todoArray, '---')
        }
    }
});

const store = configureStore({
    reducer: storeTodo.reducer
})

export const createTodoAction = storeTodo.actions;

export default store;