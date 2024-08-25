import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { FaRegEdit } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoCompleted, setTodoCompleted] = useState(todo.completed);
    
    const {editTodo, toggleCompleted, deleteTodo} = useTodoContext();

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 w-full shadow-sm shadow-white/50 duration-300  text-black 
                ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
                `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoCompleted}
                onChange={() => toggleCompleted(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        setIsTodoEditable((prev) => !prev);
                        editTodo(todo.id, todoMsg);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {/* {isTodoEditable ? "📁" : "✏️"} */}
                {isTodoEditable ? <IoSaveOutline  /> : <FaRegEdit />}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                <RiDeleteBin5Line />
            </button>
        </div>
    );
}

export default TodoItem;