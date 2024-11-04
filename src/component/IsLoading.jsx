import React from 'react'

const IsLoading = () => {
  return (
    <div className='h-auto relative'>
     <p className='mr-1'>Welcome to the Gaurav Engineering <br/> Document is Loading Please Wait</p>  
    
     <div  className='absolute right-0 bottom-1 h-1 w-1 text-2xl animate-ping bg-green-700 rounded-full'/>  
     <div  className=' absolute right-2 bottom-1 h-1 w-1 text-2xl animate-ping bg-green-700 rounded-full'/>  
     <div  className=' absolute right-4 bottom-1 h-1 w-1 text-2xl animate-ping bg-green-700 rounded-full'/>
    </div>
    
  )
}

export default IsLoading
