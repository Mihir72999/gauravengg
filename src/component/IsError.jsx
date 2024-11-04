import React from 'react'

const IsError = () => {
  return (
    <div className='flex flex-col items-center justify-center max-h-dvh'>
       <h1 className='text-2xl mb-3'>Something Went Wrong Please Try Again</h1>
       <button onClick={()=>window.location.reload()} className='flex justify-center items-center px-4 py-2 rounded-lg
        bg-red-950 text-white'>Try Again</button> 
    </div>
  )
}

export default IsError
