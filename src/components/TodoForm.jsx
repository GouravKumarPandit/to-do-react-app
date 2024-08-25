import { useRef, useState } from "react";
import { useTodoContext } from "../context/TodoContext";

function TodoForm() {
    const newTodo = useRef();
    const {addTodo} = useTodoContext();

    const submitNotes = (event) => {
        event.preventDefault();
        if(!newTodo.current.value) return;
        
        addTodo(newTodo.current.value);
        newTodo.current.value = "";
    }

    return (
        <form className="flex" onSubmit={submitNotes}>
            <input
                type="text"
                ref={newTodo}
                placeholder="Write Your Todo Here..."
                className="w-full border border-pink-400 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-3 placeholder:text-white"
            />
            <button type="submit" className="rounded-r-lg px-5 py-1 bg-pink-600 text-white shrink-0">Add</button>
        </form>
    );
}

export default TodoForm;