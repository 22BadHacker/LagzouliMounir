import React from 'react'
import {Effect, soLinks} from '../Component/main'
import logo from '../Assets/Logo/Blaack.svg'

const Footer = () => {
  return (
    <div className='w-full  rounded-3xl relative  overflow-hidden px-10 h-auto py-5 gap-4 lg:h-[80px] mt-4 flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between items-center'>
        
        {/* <Effect /> */}
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        <p className='text-[14px]'>© 2025 Mounir Lagzouli. All rights Not reserved.</p>
        {/* <p className='text-[14px]'>Made with ❤️ by Mounir Lagzouli</p> */}
        <div className="flex items-center gap-2 text-sm">
            {
                soLinks.map((link, i) => {
                    const {url, icon} = link
                    return (
                        <a href={url}>{icon}</a>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default Footer
