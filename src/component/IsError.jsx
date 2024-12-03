import React from 'react'

const IsError = () => {
  return (
    <div className='flex flex-col items-center justify-center max-h-dvh'>
       <h1 role="alert" className='text-2xl tracking-tighter mb-3 font-semibold leading-tight'>Something Went Wrong Please Try Again</h1>
       <button 
       aria-label="Retry loading the page"
       onClick={()=>window.location.reload()} className='flex justify-center items-center px-4 py-2 rounded-lg
        bg-red-950 text-white font-bold'>Try Again</button> 
    </div>
  )
}

export default IsError
