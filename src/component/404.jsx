import React from 'react'
import { Link } from 'react-router-dom'

export default function Error(){
  return (
    <div className=' flex flex-col items-center gap-2 justify-center min-h-dvh'>
     <h1 className=' font-bold text-5xl max-sm:text-2xl py-2'> 404 Page not Found </h1>
     <Link to='/'><button className=' no-underline underline-offset-1 hover:underline hover:underline-offset-4 hover:border hover:border-gray-500 hover:py-2 hover:px-4 my-2 rounded-xl
      hover:decoration-slate-400 transition-all  delay-300 duration-300 ease-in hover:text-gray-500
     '>Go Back</button></Link>     
    </div>
  )
}


