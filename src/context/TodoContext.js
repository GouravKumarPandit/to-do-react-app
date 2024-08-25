import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoItems: [
        {
            id: 1234,
            todo: "Hello Kajal...",
            isCompleted: false
        }
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {},
    toggleCompleted: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}