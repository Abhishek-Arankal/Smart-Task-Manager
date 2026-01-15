import React from 'react'

const TaskCard = ({todo, handleDelete}) => {
  return (
     <div className='max-w-80 h-28 border rounded p-4 mb-4 flex flex-col justify-between'>
      <div className='flex items-center justify-between'>
         <h1 className='text-sm sm:text-md md:text-xl font-semibold'>{todo.task}</h1>
         <button className='px-2 py-0.3 border rounded text-sm'>Edit</button>
      </div>
      <div className='mt-6 '>
          <button className='px-2 py-0.5 border rounded text-sm bg-red-300 text-black' onClick={() =>handleDelete(todo)}>Delete</button>
      </div>
    </div>
  )
}

export default TaskCard
