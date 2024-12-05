import React from 'react'
import { ProjectN1 } from './ProjectN1';
import { ProjectN2 } from './ProjectN2';
import ProjectN3 from './ProjectN3';
import ProjectN4 from './ProjectN4';
import WhoAmI from '../Sections/WhoAmI';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-2 gap-6'>

        {/* Box 1 : Intro  */}
        <div className="flex  shadow-[2px_2px_4px_-1px_rgba(0,0,0,0.1)] relative  h-[520px] justify-between overflow-hidden flex-col  rounded-3xl md:px-5 px-4 lg:px-10 p-[50px_40px]">
            {/* <div className="w-full bg-transparent h-full absolute top-0 left-0 blur-[200px]"></div> */}
            <div class="absolute top-0 left-0 z-[-2] h-full w-full bg-white/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex flex-col gap-2 relative">
                <Link to='/Projects' className='font-open-sans tracking-wide relative text-[50px]'>My Projects <GoArrowUpRight className='bg-[#f1f1f1] p-[8px] text-[45px] rounded-full absolute top-0 right-0' /></Link>
                <h6 className='text-[16px]'>A diverse collection of projects that I have worked on.</h6>
                <h6 className='text-[17px] font-open-sans'>" The only way to do great work is to love what you do "  </h6>
            </div>

            <div className="grid grid-cols-2   gap-10 w-full">
                <div className="flex flex-col">
                    <p className='lg:text-[60px] text-[50px]  relative  font-semibold flex'>25<span className='lg:text-[15.5px] md:text-[15.5px]  text-[13px] relative top-[14px] '>+ Projects</span></p>
                    <h5 className='font-transforma opacity-80  lg:text-[18px]'>as a Graphic Designer</h5>
                </div>
                <div className="flex flex-col">
                    <p className='lg:text-[60px] text-[50px] relative  font-semibold flex'>18<span className='lg:text-[15.5px] md:text-[15.5px]  text-[13px] relative top-[14px] '>+ Projects</span></p>
                    <h5 className='font-transforma opacity-80  lg:text-[18px]'>as a Developer</h5>
                </div>
                
            </div>

        </div>

        {/* Boxes */}
        <>
            <ProjectN1 />
        </>
        <>
            <ProjectN2 />
        </>
        <>
            <ProjectN3 />
        </>
        <>
            <ProjectN4 />
        </>

        {/* About section */}
        <>
            <WhoAmI />
        </>

       


    </div>
  )
}

export default Work
