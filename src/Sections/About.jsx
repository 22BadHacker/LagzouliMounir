import React from 'react'
import { Effect, socialLinks } from '../Component/main'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='relative  shadow-[2px_2px_6px_-1px_rgba(0,0,0,0.1)] overflow-hidden w-full lg:h-[500px] md:h-[500px] sm:h-[500px] h-[490px] rounded-3xl'>
    <Effect />        
    <div className="flex w-full h-full p-10 flex-col justify-between">

      <div className="flex flex-col md:gap-7 sm:gap-8 gap-3 lg:gap-10">
        <p className='lg:text-[37px] md:text-[37px] sm:text-[35px] text-[28px] leading-snug font-open-sans  lg:max-w-[505px] font-semibold'>Hello, I’m Mounir Lagzouli, a Designer & Developer With 2 years of experience.</p>
        <p className='lg:text-[17px] text-[17.5px] lg:max-w-[600px]'>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
      </div>

      <div className="flex lg:flex-row md::flex-row sm:flex-row flex-col gap-4 items-center w-full ">
        <span className="bg-black w-full lg:w-[180px] cursor-pointer md:w-[180px] sm:w-[180px] flex items-center justify-center hover:bg-[rgb(0,0,0,.8)] text-white  rounded-full h-[50px]">Contact me</span>
        <div className="flex items-center lg:gap-4 md:gap-4 sm:gap-4 justify-between lg:w-fit md:w-fit sm:w-fit w-full">
          {
            socialLinks.map((link, index) => {
              const {href, items} = link
              return (

                
                  <Link  to={href} className=' lg:scale-95 scale-[.85] font-semibold font-open-sans'>{items}</Link>
              )
            })
          }

        </div>
      </div>
      
    </div>
        
      
    </div>
  )
}

export default About
