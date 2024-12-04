import React from 'react'
import { About } from './main'

const Home = () => {
  return (
    <div className='w-full h-auto pt-5 text-black grid grid-cols-1'>

        <div className="w-full h-auto grid  md:grid-cols-[1fr_.5fr] lg:grid-cols-[1fr_.5fr] gap-4">
            <About />
        </div>
        
    </div>
  )
}

export default Home
