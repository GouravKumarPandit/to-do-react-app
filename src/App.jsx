import { useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoContextProvider, useTodoContext } from './context/TodoContext'

function App() {
	const [todoItems, setTodoItems] = useState();

	const addTodo = () => {}
	const deleteTodo = () => {}
	const editTodo = () => {}
	const toggleCompleted = () => {}

	return (
		<TodoContextProvider value={{todoItems, addTodo, deleteTodo, editTodo, toggleCompleted}}>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{/* <TodoItem /> */}
					</div>
				</div>
			</div>
		</TodoContextProvider>
	)
}

export default App
