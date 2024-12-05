import React from 'react'

const WhoAmI = () => {
  return (
    <>
       <div className="flex  shadow-[2px_2px_4px_-1px_rgba(0,0,0,0.1)] relative  h-[520px] justify-between overflow-hidden flex-col  rounded-3xl md:px-5 px-4 lg:px-10 p-[50px_40px]">
            {/* <div className="w-full bg-transparent h-full absolute top-0 left-0 blur-[200px]"></div> */}
            <div class="absolute top-0 left-0 z-[-2] h-full w-full bg-white/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex flex-col gap-2 relative">
                <p className='headLine font-open-sans tracking-wide text-[50px]'>Who's Me</p>
                <h6 className='text-[16px]'>I'm Gonna Make This introduction about me So simple! </h6>
                <h6 className='text-[17px] font-open-sans'>I'm A software engineer, Graphic Designer.  </h6>                
           </div>

            <div className="flex flex-col gap-3 w-full">
                <p className='font-open-sans text-orange-700/100 text-[16.5px]'>Full Name : <span className='opacity-100 text-black/80 font-roboto font-medium uppercase'>Mounir Lagzouli</span></p>
                <p className='font-open-sans text-[16.5px] text-orange-700/100'>Profession : <span className='opacity-100 text-black/80 font-roboto font-medium uppercase'>Graphic Designer & Web devoloper</span></p>
                <p className='font-open-sans text-[16.5px] text-orange-700/100'>Degree : <span className='opacity-100 text-black/80 font-roboto font-medium uppercase'>Bachelor in physics and chemistry</span></p>

            </div>

            
        </div>
    </>
  )
}

export default WhoAmI





// <div className="grid grid-cols-2   gap-10 w-full">
//                 <div className="flex flex-col">
//                     <p className='lg:text-[60px] text-[50px]  relative  font-semibold flex'>25<span className='lg:text-[15.5px] md:text-[15.5px]  text-[13px] relative top-[14px] '>+ Projects</span></p>
//                     <h5 className='font-transforma opacity-80  lg:text-[18px]'>as a Graphic Designer</h5>
//                 </div>
//                 <div className="flex flex-col">
//                     <p className='lg:text-[60px] text-[50px] relative  font-semibold flex'>18<span className='lg:text-[15.5px] md:text-[15.5px]  text-[13px] relative top-[14px] '>+ Projects</span></p>
//                     <h5 className='font-transforma opacity-80  lg:text-[18px]'>as a Developer</h5>
//                 </div>
                
//             </div>