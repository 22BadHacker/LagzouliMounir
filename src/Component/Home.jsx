import React from 'react'
import { AboutContain } from './main'

const Home = () => {
  return (
    <div className='w-full h-auto pt-5 text-black grid grid-cols-1'>

        <div className="w-full h-auto grid  grid-cols-1 gap-4">
            <AboutContain />
        </div>
        
    </div>
  )
}

export default Home
