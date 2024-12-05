import React from 'react'
import img1 from '../Assets/Projects/VictoriaBag-min.webp'
import img2 from '../Assets/Projects/VictoriaBottle-min.webp'
import img3 from '../Assets/Projects/Lip Balm Mockup.png'
import {projectPage} from '../Component/main'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Projects = () => {

  useGSAP(() => {
    gsap.from('.boox', {
      y: '100%',
      scale: 0,
      opacity: 0,
      duration: .3,
      delay: 0.3,
      ease: 'ease-in-out',
      stagger :{
        amount: .4
      },
      yoyo: true
    })
  })
  return (
    <div className='w-full h-auto grid grid-cols-1'>
      <div className='boxees overflow-hidden w-full h-auto md:columns-3 sm:columns-2 lg:columnBox py-5'>
          {
            projectPage.map((item, index) => {
              const {img, name, desc, icon1, icon2, icon3, icone4, icone5} = item
              return (
                <div key={index} className='boox relative h-auto overflow-hidden rounded-xl mb-4'>
                  
                  <span>{img}</span>
                  <div className="desc flex absolute -bottom-8  right-0 px-4 flex-col gap-0">
                    <p className='text-white text-[22px] font-open-sans'>{name}</p>
                    <h5 className='text-white/70 text-[12px] font-semibold relative -top-1'>{desc}</h5>
                  </div>
                  <div className="linnks flex gap-3 absolute top-3 right-3 items-center">

                    {icon1 && <span className='text-white text-[20px]'>{icon1}</span>}
                    { icon2 && <span className='text-white text-[20px]'>{icon2}</span>}
                    { icon3 && <span className='text-white text-[20px]'>{icon3}</span>}
                    { icone4 && <span className='text-white text-[20px]'>{icone4}</span>}
                    { icone5 && <span className='text-white text-[20px]'>{icone5}</span>}
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