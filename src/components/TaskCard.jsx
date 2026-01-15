import React from 'react'

const TaskCard = ({todo}) => {
  return (
     <div className='max-w-80 h-25 border rounded p-4 mt-4'>
          <h1 className='text-sm sm:text-md md:text-xl'>{todo}</h1>
    </div>
  )
}

export default TaskCard
