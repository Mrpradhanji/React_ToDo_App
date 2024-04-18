import React, { useState } from 'react'
import { TodoProvider } from './contexts'

function App() {
  const [todos,setTodos] = useState([]) //by default empty array
  
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])//...prev previous todo
  }

  const updatedTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>
    (prevTodo.id===id ? todo : prevTodo)))
    /*
    prev.map((eachVal) =>{
      if(eachVal.id===id){
        todo
      }) for understanding
    } */
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleCompleted = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo === id ? 
    {...prevTodo , completed:!prevTodo.completed}:prevTodo))
  }

  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
