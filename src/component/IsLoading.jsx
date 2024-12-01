import React from 'react'
import { GoGear } from 'react-icons/go'

const IsLoading = () => {
  return (
    <div className='flex w-screen flex-col flex-1 min-h-dvh items-center justify-center'>
    <GoGear className='h-20 w-20 animate-spin  fill-gray-500'/>
    <GoGear className='-ml-5 -mt-5 h-20 w-20 animate-spinReverse fill-gray-500 '/>

  </div>
  )
}

export default IsLoading
