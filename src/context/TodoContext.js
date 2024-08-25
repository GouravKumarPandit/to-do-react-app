import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoItems: [],
    addTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {},
    toggleCompleted: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}