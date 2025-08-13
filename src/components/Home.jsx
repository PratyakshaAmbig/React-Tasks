import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const taskList=[
        {
            title:"Accordion-Task",
            link:'/accordion'
        },
        {
            title:"StarRating-Task",
            link:'/starRating'
        },
        {
            title:"Copy to Clipboard Task",
            link:'/copytext'
        },
        {
            title:"OTP field Task",
            link:'/otp'
        },
        {
            title:"Image Carouse Task",
            link:'/imagecarouse'
        },
        
    ]
  return (
    <div>
        <h1 className='text-center text-4xl mt-10 font-bold bg-gradient-to-tr from-pink-700 to-blue-700 bg-clip-text text-transparent'>React-Tasks</h1>
      {
        taskList.map((task,index)=>(
            <Link key={index} className='border-2 border-black w-4xl mx-auto flex justify-center items-center mt-10 p-2 rounded-xl flex-col hover:bg-gray-100 hover:border-amber-500 text-blue-600 transition-colors hover:text-black' to={task.link}>
                <h1 className='text-xl font-bold'>{task.title}</h1>
            </Link>
        ))
      }
    </div>
  )
}

export default Home
