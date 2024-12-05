import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import mega from '../Assets/Projects/Free Business Cards on Chair Mockup.webp'

const ProjectN4 = () => {
  return (
    <>

            <div className="w-full relative overflow-hidden h-auto  md:h-[520px] sm:h-[520px] lg:h-[520px] rounded-3xl shadow-[2px_2px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-10 ">
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
                <div className="w-full flex justify-between items-center md:px-10 sm:px-10 px-5 lg:px-10 py-7">
                    <div className="flex flex-col">
                        <p className='text-[24px] font-open-sans '>MEGASOFT</p>
                        <h5 className='text-[15.5px] opacity-90 lg:w-fit md'>Business Card Design</h5>
                    </div>
                    <a  href="/"  ><GoArrowUpRight className='bg-[#f1f1f1] p-[8px] text-[45px] rounded-full ' /></a>
                </div>

                <div className="w-full  h-full px-4">
                    <img src={mega} className='w-full relative h-full  rounded-[8px_8px_0px_0px]' alt="" />
                   
                </div>
            </div>   
      
    </>
  )
}

export default ProjectN4
