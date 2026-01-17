import React, { useMemo } from 'react'
import { useState } from 'react'
import TaskCard from './components/TaskCard'


function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")
  const [isEditingId, setIsEditingId] = useState(null)
  const [filter, setFilter] = useState("all")

  const handleSubmit = () => {
      if(task.trim() === ""){
        alert("Enter task to add")
        return;
      }
      setTodos([...todos, {id: Date.now(), task: task, completed: false}])
      setTask("")
  }
  
const handleDelete = (todo) => {
  const updatedTodos = todos.filter((t) => t.id !== todo.id)
  setTodos(updatedTodos)

}
const handleTaskCompleted = (todo) => {
  const updatedTodos = todos.map((t) => t.id === todo.id ? {...t, completed: !t.completed} : t)
  setTodos(updatedTodos)
}

const handleEditSave = (todo, editedTask) => {
  const trimmedTask = editedTask.trim()
  if(trimmedTask === "" || todo.task.toLowerCase() === trimmedTask.toLowerCase()){
    setIsEditingId(null)
    return
  };

  const updatedTodos = todos.map((t) => t.id === todo.id ? {...t, task: trimmedTask} : t)
  setTodos(updatedTodos)
  setIsEditingId(null)
  
}

const filteredTasks = useMemo(() => {
  return todos.filter((todo) => {
  if(filter === "active") return todo.completed !== true
  if(filter === "completed") return todo.completed === true
  return true
})
}, [filter, todos])

  return (
    <div className='w-full h-screen bg-gray-800 text-white'>
      <div className='p-6'>
        <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Smart Task Manager</h1>
      <div className='flex items-center justify-center mt-10'>
          <input type='text' placeholder='Add task...' value={task} onChange={(e) => setTask(e.target.value)} className='border rounded px-2 py-2 w-80 m-2'></input>
          <button onClick={(e) => handleSubmit(e)} className='border rounded p-2 w-25 cursor-pointer hover:bg-gray-400 hover:text-black'>Add Task</button>
      </div>
      <h1 className='text-2xl text-center mt-10 font-bold'>Tasks To DO</h1>
      <div className='flex items-center justify-around mt-5'>
        <button className={`px-3 py-1 border rounded w-25 text-black font-semibold cursor-pointer ${filter === "all" ? "bg-orange-300" : "bg-white"}`} value="all" onClick={(e) => setFilter(e.target.value)}>All</button>
        <button className={`px-3 py-1 border rounded w-25 text-black font-semibold cursor-pointer ${filter === "active" ? "bg-orange-300" : "bg-white"}`} value="active" onClick={(e) => setFilter(e.target.value)}>Active</button>
        <button className={`px-3 py-1 border rounded w-25 text-black font-semibold cursor-pointer ${filter === "completed" ? "bg-orange-300" : "bg-white"}`} value="completed" onClick={(e) => setFilter(e.target.value)}>Completed</button>
      </div>
      <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
       {filteredTasks.map((todo, idx) => (
        <TaskCard todo={todo} key={todo.id} handleDelete={handleDelete} handleTaskCompleted={handleTaskCompleted} editingId={isEditingId} setEditingId={setIsEditingId} handleEditSave={handleEditSave}/>
       ))}

      </div>
      </div>

      
    </div>
    
  )
}

export default App
