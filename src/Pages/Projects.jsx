import React from 'react'
import {projectPage} from '../Component/main'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Projects = () => {

  // useGSAP(() => {
  //   gsap.from('.boox', {
  //     y: '100%',
  //     scale: 0,
  //     opacity: 0,
  //     duration: .3,
  //     delay: 0.3,
  //     ease: 'ease-in-out',
  //     stagger :{
  //       amount: .4
  //     },
  //     yoyo: true
  //   })
  // })
  return (
    <div className='w-full h-full py-4'>
      <div className='w-full py-10 pb-12 flex items-center justify-center '>
          <h1 className='text-[50px] font-transforma'>A Glimpse into My Work and Progress </h1>

      </div>

      <div className='w-full pb-5 flex items-center justify-between'>
          <p className='text-[17px] relative w-fit'>my Collection <span className='size-[5px] bg-[#ff4745] rounded-full absolute top-1 -right-1'/></p>
          <div className='flex items-center gap-4'>
              <p className='border-[.5px] text-[14px] hover:text-white hover:bg-[#323033] cursor-pointer rounded-full border-black/20 px-4 py-1'>Logo Design</p>
              <p className='border-[.5px] text-[14px] hover:text-white hover:bg-[#323033] cursor-pointer rounded-full border-black/20 px-4 py-1'>Business Card</p>
              <p className='border-[.5px] text-[14px] hover:text-white hover:bg-[#323033] cursor-pointer rounded-full border-black/20 px-4 py-1'>Posters</p>
              <p className='border-[.5px] text-[14px] hover:text-white hover:bg-[#323033] cursor-pointer rounded-full border-black/20 px-4 py-1'>Websites</p>
              <p className='border-[.5px] text-[14px] hover:text-white hover:bg-[#323033] cursor-pointer rounded-full border-black/20 px-4 py-1'>UX Design</p>
          </div>
      </div>

      <div className=' columns-1 gap-4 overflow-hidden w-full h-full md:columns-3 sm:columns-2 cursor-pointer '>
          {
            projectPage.map((item, index) => {
              const {img, name, desc, alt, icons} = item
              return (
                <div key={index} className='flex flex-col gap-2 relative h-auto pb-5'>
                  
                  <img className='object-cover hover:saturate-[1.3] duration-[200ms] ease-inOut w-full h-full' src={img} alt={alt} />
                  <div className="w-full flex gap-3 items-center">
                    <p className='text-[#222222] font-open-sans lg:text-[17px] text-[18px]'>{name} </p>
                    <span className='text-[14px] font-roboto opacity-80'>by</span>
                    <span className='text-[17px] flex items-center gap-2'>{icons}</span>
                    
                  </div>
                  
                 

                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects


// columns-[250px] gap-x-4




// {/* <div className='h-auto columnBox  '>
//         <img src={img1} className='mb-4 object-cover rounded-xl' alt="" />
//         <img src={img2} className='mb-4 object-cover rounded-xl' alt="" />
//         <img src={img3} className='mb-4 object-cover rounded-xl' alt="" />
//         <img src={img2} className='mb-4 object-cover rounded-xl' alt="" />
//         <img src={img1} className='mb-4 object-cover rounded-xl mt-4' alt="" />
        
//     </div> */}