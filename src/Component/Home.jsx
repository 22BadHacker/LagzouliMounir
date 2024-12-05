import React from 'react'
import { AboutContain, Work, Skills, Contact, Form, Footer } from './main'


const Home = () => {
  return (
    <div className='w-full h-auto pt-5 grid grid-cols-1 '>

        <div className="w-full h-auto grid  grid-cols-1 gap-4">
            <AboutContain />
            <Work />
            <Skills />
            <Form />
            <Contact />
            
        </div>
        
    </div>
  )
}

export default Home
