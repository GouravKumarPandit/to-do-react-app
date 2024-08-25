import { useEffect, useId, useState } from 'react'
import './App.css'
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoContextProvider, useTodoContext } from './context/TodoContext'

function App() {
	const [todoItems, setTodoItems] = useState([]);

	const addTodo = (newTodo) => {
		const newTodoItem = {
			id: Math.floor(100 + Math.random() * (1000 - 100)),
			todo: newTodo,
			completed: false
		}

		setTodoItems((currentValue) => [...currentValue, newTodoItem])

		/* OR like this we can also return the new todo item with existing items.
		setTodoItems((currentValue) => {
			const newItem = [
				...currentValue,
				newTodoItem
			]

			return newItem;
		}) */
	}

	const deleteTodo = (itemId) => {
		setTodoItems((prevTodo) => prevTodo.filter((currentTodo) => currentTodo.id !== itemId));
	}

	const editTodo = (todoId, todoMessage) => {		
		setTodoItems((prevTodo) => prevTodo.map((currentTodo) => {
			if(currentTodo.id === todoId){
				const updatedItem = {
					id: currentTodo.id,
					todo: todoMessage,
					completed: false,
				}
				return updatedItem;
			} else return currentTodo;
		}));
	}

	const toggleCompleted = (todoId) => {
		setTodoItems((prevTodo) => prevTodo.map((currentTodo) => {
			if(currentTodo.id === todoId){
				const completedItem = {
					id: currentTodo.id,
					todo: currentTodo.todo,
					completed: true,
				}
				return completedItem;
			} else return currentTodo;
		}))
	}

	// It will execute when page will refresh, and then it will get the data from the session and then it will set it to todoItems variable.
	useEffect(() => {
		const allTodos = JSON.parse(localStorage.getItem("allTodos"))

		if (allTodos && allTodos.length > 0) {
			setTodoItems(allTodos)
		}
	}, [])

	// It will execute when todoItems variable state will change
	useEffect(() => {
		localStorage.setItem("allTodos", JSON.stringify(todoItems))
	}, [todoItems])

	return (
		<TodoContextProvider value={{ todoItems, addTodo, deleteTodo, editTodo, toggleCompleted }}>
			<div className=" min-h-screen py-8 rounded-2xl">
				<div className="w-full max-w-2xl mx-auto shadow-sm shadow-blue-400 shadow-current rounded-lg py-3 text-white px-8 pb-8 ">
					<h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
					<div className="mb-4">
						<TodoForm />
						<h2 className='text-start text-sm mb-2'>Manage your day to day todo task here!!</h2>
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todoItems.length !== 0 ? todoItems?.map((todo) => <TodoItem key={todo.id} todo={todo} />) : ""}
					</div>
				</div>
			</div>
		</TodoContextProvider>
	)
}

export default App
