import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import illusion from '../Assets/Projects/Apple MacBook Pro Scen Mockup v3-min.webp'

const ProjectN3 = () => {
  return (
    <>
            <div className="w-full relative overflow-hidden h-auto  md:h-[520px] sm:h-[520px] lg:h-[520px] rounded-3xl shadow-[2px_2px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-10 ">
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_100%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
                <div className="w-full flex justify-between items-center md:px-10 sm:px-10 px-5 lg:px-10 py-7">
                    <div className="flex flex-col">
                        <p className='text-[24px] font-open-sans '>Illusion Studio</p>
                        <h5 className='text-[15.5px] opacity-90 lg:w-fit md'>Music Website</h5>
                    </div>
                    <a target='_blank' href="https://ilusionstudio.netlify.app/" rel="noreferrer" ><GoArrowUpRight className='bg-[#f1f1f1] p-[8px] text-[45px] rounded-full ' /></a>
                </div>

                <div className="w-full  h-full">
                    <img src={illusion} className='w-full relative h-full  -right-10 rounded-[8px_0px_0px_0px]' alt="" />
                   
                </div>
            </div>        
        </>
  )
}

export default ProjectN3
