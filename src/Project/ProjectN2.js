import { projectBox } from "../Component/main";
import { GoArrowUpRight } from "react-icons/go";
import mock from '../Assets/Projects/Mockup-min.webp'


export const ProjectN2 = () => {
    return(
        <>
            <div className="w-full relative overflow-hidden h-auto  md:h-[520px] sm:h-[520px] lg:h-[520px] rounded-3xl shadow-[2px_2px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-10 ">
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
                <div className="w-full flex justify-between items-center md:px-10 sm:px-10 px-5 lg:px-10 py-7">
                    <div className="flex flex-col">
                        <p className='text-[24px] font-open-sans '>Mounir Lagzouli</p>
                        <h5 className='text-[15.5px] opacity-90 lg:w-fit md'>Portfolio Version 1.0</h5>
                    </div>
                    <a target='_blank' href="https://main--mounirlagzouli.netlify.app/" rel="noreferrer" ><GoArrowUpRight className='bg-[#f1f1f1] p-[8px] text-[45px] rounded-full ' /></a>
                </div>

                <div className="w-full  h-full">
                    <img src={mock} className='w-full relative h-full  -right-10 rounded-[8px_0px_0px_0px]' alt="" />
                   
                </div>
            </div>        
        </>
    )
} 