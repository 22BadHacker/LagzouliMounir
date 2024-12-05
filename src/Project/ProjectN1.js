import { projectBox } from "../Component/main";
import { GoArrowUpRight } from "react-icons/go";
import Logo from '../Assets/Projects/Logo.svg'
import Bag from '../Assets/Projects/VictoriaBag-min.webp'
import Bottle from '../Assets/Projects/VictoriaBottle-min.webp'


export const ProjectN1 = () => {
    return(
        <>
            <div className="w-full relative overflow-hidden  md:h-[520px] sm:h-[520px] lg:h-[520px] rounded-3xl shadow-[2px_2px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-10 ">
                <div class="absolute top-0 left-0 z-[-2] h-full w-full rotate-180 transform bg-white/40 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
                <div className="w-full flex justify-between items-center md:px-10 sm:px-10 px-5 lg:px-10 py-7">
                    <div className="flex flex-col">
                        <p className='text-[24px] font-open-sans '>Victoria</p>
                        <h5 className='text-[15.5px] opacity-90 lg:w-fit md'>Brand design For Cosmetic Studio</h5>
                    </div>
                    <GoArrowUpRight className='bg-[#f1f1f1] p-[8px] text-[42px] rounded-full ' />
                </div>

                <div className="w-full flex items-center gap-2 flex-col">
                    <img src={Logo} className='w-[190px] relative -top-5' alt="" />
                    <div className="w-full  grid grid-cols-2 gap-3 lg:h-auto md:h-[250px]  h-[20vh]">
                        <img src={Bag} className='rounded-[0px_12px_0px_0px] h-full object-cover w-full sm:h-[25vh]' alt="" />
                        <img src={Bottle} className='rounded-[12px_0px_0px_0px] h-full object-cover w-full sm:h-[25vh]' alt="" />
                    </div>
                </div>
            </div>        
        </>
    )
} 