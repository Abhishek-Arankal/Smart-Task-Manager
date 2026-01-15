import React from 'react'
import { useState } from 'react'
import TaskCard from './components/TaskCard'


function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")

  const handleSubmit = () => {
      if(task.trim() === ""){
        alert("Enter task to add")
        return;
      }
      setTodos([...todos, {id: Date.now(), task: task}])
      setTask("")
  }
  console.log("todos",todos)
  
const handleDelete = (todo) => {
  const updatedTodos = todos.filter((t) => t.id !== todo.id)
  setTodos(updatedTodos)

}
  return (
    <div className='w-full h-screen bg-gray-800 text-white'>
      <div className='p-6'>
        <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Smart Task Manager</h1>
      <div className='flex items-center justify-center mt-10'>
          <input type='text' placeholder='Add task...' value={task} onChange={(e) => setTask(e.target.value)} className='border rounded px-2 py-2 w-80 m-2'></input>
          <button onClick={(e) => handleSubmit(e)} className='border rounded p-2 w-25 cursor-pointer hover:bg-gray-400 hover:text-black'>Add Task</button>
      </div>
      <h1 className='text-2xl text-center mt-10 font-bold'>Tasks To DO</h1>
      <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
       {todos.map((todo, idx) => (
        <TaskCard todo={todo} key={todo.id} handleDelete={handleDelete}/>
       ))}

      </div>
      </div>

      
    </div>
    
  )
}

export default App
