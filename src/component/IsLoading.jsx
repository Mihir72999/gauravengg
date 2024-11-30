import React from 'react'
import { GoGear } from 'react-icons/go'

const IsLoading = () => {
  return (
    // <div className='h-auto relative'>
    //  <p className='mr-1'>Welcome to the Gaurav Engineering <br/> Document is Loading Please Wait</p>  
    
    //  <div  className='absolute right-0 bottom-1 h-1 w-1 text-2xl animate-ping bg-pista rounded-full'/>  
    //  <div  className=' absolute right-2 bottom-1 h-1 w-1 text-2xl animate-ping bg-pista rounded-full'/>  
    //  <div  className=' absolute right-4 bottom-1 h-1 w-1 text-2xl animate-ping bg-pista rounded-full'/>
    // </div>
    <div className='flex flex-col flex-1 min-h-dvh items-center justify-center'>
    <GoGear className='h-20 w-20 animate-spin  fill-gray-500'/>
    <GoGear className='h-20 w-20 fill-gray-500 animate-spinReverse'/>

  </div>
  )
}

export default IsLoading
