import React from 'react'

const IsLoading = () => {
  return (
    <div className='flex w-screen flex-col flex-1 min-h-dvh items-center justify-center'>
   
    <img src='/icon/gear.svg' alt='gear icon' className='h-20 w-20 animate-spin' />

    <img src='/icon/gear.svg' alt='gear icon' className='h-20 w-20 animate-spinReverse -ml-5 -mt-5' />

  </div>
  )
}

export default IsLoading
