import React from 'react'

const TaskCard = ({todo, handleDelete, handleTaskCompleted}) => {
  return (
     <div className='max-w-80 h-28 border rounded p-4 mb-4 flex flex-col justify-between'>
      <div className='flex items-center justify-between'>
         <h1 className='text-sm sm:text-md md:text-xl font-semibold'>{todo.task}</h1>
         <button className='px-2 py-0.3 border rounded text-sm'>Edit</button>
      </div>
      <div className='mt-7 flex items-center justify-between '>
          <button className='px-2 py-0.5 border rounded text-sm bg-red-300 text-black' onClick={() =>handleDelete(todo)}>Delete</button>
          <button className='w-5 h-5 border' onClick={() =>handleTaskCompleted(todo)}>{todo.completed && <span className="text-md font-bold leading-none">✔</span>}</button>
      </div>
    </div>
  )
}

export default TaskCard
