import React from 'react'
import About from './About'
import Mounir from '../Assets/Mounir.jpg'
// import tuxeture from '../Assets/texuter2.jpg'
import tuxeture from '../Assets/tuxeture.jpg'

const AboutContain = () => {
  return (
    <div className='w-full h-auto  gap-6 o grid md:grid-cols-[1fr_.5fr] lg:grid-cols-[1fr_.5fr]'>
        <About />
        <div className='w-full shadow-[2px_2px_4px_-1px_rgba(0,0,0,.2)] h-[450px] md:h-full  lg:h-full relative overflow-hidden rounded-3xl'>
          <img src={Mounir} className='img  h-full w-full object-cover' alt="" />
          <img src={tuxeture} className='img2' alt="" />
          <p className='absolute bottom-4 font-sign right-4 text-white tracking-wide z-[3] text-[45px] font-semibold'>Mounir Lagzouli</p>
        </div>
    </div>
  )
}

export default AboutContain
