import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import {socialLinks} from '../Component/main'


const Contact = () => {
  return (
    <div className='w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 h-auto  '>
        <div className="flex flex-col backdrop-blur-[5px] bg-white/05 border-[.5px] border-black/20 justify-end overflow-hidden relative gap-4 p-[20px_25px]  shadow-md h-[250px] rounded-3xl">
            {/* <div class="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}
            <div className="flex w-full  flex-col gap-1">
                <p className='text-[28px] font-open-sans pb-2'>Wanna work together?</p>
                <h5 className='text-[16px]'>Feel free to reach out for collaborations or just a friendly hello</h5>
                <h5 className='text-[15px] font-open-sans'>mounirlagzouli22@gmail.com</h5>
            </div>
        </div>


        <div className='w-full border-[.5px] border-black/20 relative p-[20px_25px] overflow-hidden shadow-md  rounded-3xl  h-full  flex flex-col  justify-between'>
        <div class="absolute top-0 -z-10 h-full backdrop-blur-[20px] w-full bg-transparent"><div class="absolute bottom-auto left-0 right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[100px]"></div></div>
           <div className="flex gap-1 flex-col">
                <p className='text-[28px] font-open-sans pb-2 w-full flex   items-end'>Reach out?</p>
                <div className="flex w-full  gap-3 items-center"><FaPhone /> <a href="#" className='underline font-open-sans text-[15px]'>+212 708 148 077</a></div>
                <div className="flex w-full  gap-3 items-center"><MdAlternateEmail /> <a href="#" className='underline font-open-sans text-[15px]'>2016booy@gmail.com</a></div>
                <div className="flex w-full  gap-3 items-center"><FaGoogle /> <a href="https://main--mounirlagzouli.netlify.app/" className='underline font-open-sans text-[15px]'>main--mounirlagzouli.netlify.app</a></div>
            </div> 
            <div className="w-full gap-2 flex items-center justify-end">
                {
                    socialLinks.map((link, i) => {
                        const {href, items} = link
                        return (
                            <a className='scale-[.75]' href={href}>{items}</a>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Contact
