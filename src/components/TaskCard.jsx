import React, { useEffect, useState } from 'react'

const TaskCard = ({todo, handleDelete, handleTaskCompleted, editingId, setEditingId, handleEditSave}) => {
  const [editedTask, setEditedTask] = useState(todo.task)

  useEffect(() => {
    if(editingId === todo.id){
      setEditedTask(todo.task)
    }
  }, [editingId, todo.task])
  return (
     <div className='max-w-80 h-33 border rounded p-4 mb-4 flex flex-col justify-between'>
      <div className='flex flex-col'>
         {editingId === todo.id ? (<input className=' text-sm border rounded px-1.5 py-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400' value={editedTask} onChange={(e) => setEditedTask(e.target.value)}></input>) : (<h1 className='text-sm sm:text-md md:text-xl font-semibold'>{todo.task}</h1>)}
         {editingId === todo.id ? (
          <div className='flex items-center gap-2 mt-2'>
            <button className='px-2 py-0.3 border rounded text-sm bg-green-500 text-white hover:bg-green-600 transition' onClick={() => handleEditSave(todo, editedTask)} disabled={editedTask.toLowerCase() === todo.task.toLowerCase()}>Save</button>
            <button className='px-2 py-0.3 border rounded text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition'onClick={() => setEditingId(null)}>Cancel</button>

          </div>
         ) : (<button className='px-2 py-0.3 border rounded text-sm w-fit mt-2 bg-blue-500 text-white hover:bg-blue-600 transition' onClick={() => setEditingId(todo.id)}>Edit</button>)}
      </div>
      <div className='mt-6  flex items-center justify-between '>
          <button className='px-2 py-0.5 border rounded text-sm bg-red-300 text-black' onClick={() =>handleDelete(todo)}>Delete</button>
          <button className='w-5 h-5 border' onClick={() =>handleTaskCompleted(todo)}>{todo.completed && <span className="text-md font-bold leading-none">✔</span>}</button>
      </div>
    </div>
  )
}

export default TaskCard
