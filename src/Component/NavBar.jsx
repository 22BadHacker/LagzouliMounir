import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import Logo from '../Assets/Logo/Blaack.svg'
import {NavLinks} from './main'

const NavBar = () => {
    const [open, setOpen] = useState(true)

    const toggle = () => {
        setOpen(!open)
    }
    const toggleClass = open ? 'active' : ''
  return (

    <>
        <nav className='w-full z-50 relative flex justify-between items-center'>
            <img src={Logo} alt="Logo" className='w-[250px]' />


            <div className=" mt-1 gap-5 items-center hidden lg:flex md:flex">
                {
                    NavLinks.map((link, index) => {
                        const {title, url} = link
                        return(
                            
                            <Link to={url} key={index} className='text-black last:borderBtn hover:text-orangee font-medium text-[16.8px] transition-all duration-200'>{title}</Link>    
                        )
                    })
                }
            </div>

            <div onClick={toggle} className={`${toggleClass} menu size-[34px] cursor-pointer flex flex-col  lg:hidden md:hidden duration-300 ease-out  justify-center items-center`}>
                <div className="bar1 h-[1.5px] w-full bg-[#000]   -translate-y-[2px]"></div>
                <div className="bar2 h-[1.5px] w-full bg-[#000]   translate-y-[2px]"></div>
            </div>
        </nav>

        <AnimatePresence>

            {
                open && 
                <div className='fixed lg:hidden md:hidden top-0 p-[8em_25px] duration-300 ease-linear overflow-hidden z-10 left-0 w-screen h-screen bg-[rgb(241,241,241,.5)] backdrop-blur-[50px]  flex flex-col gap-5'>
                    {
                        NavLinks.map((link, index) => {
                            const {title, url} = link
                            return(
                                <>
                                    <Link to={url} className='text-black  bg-transparent h-[50px] overflow-hidden hover:text-orangee translate-x-1 font-open-sans font-semibold text-[30px] transition-all duration-200' key={index}>
                                        <motion.div exit={{opacity: 0, filter: 'blur(5px)'}} animate={{y: 0, filter: 'blur(0px)'}} initial={{y: 60, filter: 'blur(5px)'}} transition={{duration: 0.4, delay: index * 0.1, ease: 'easeInOut', type: 'tween'}}  >{title}</motion.div> 
                                    </Link>

                                </>
                                
                            )
                        })
                    }
                </div>
            }

        </AnimatePresence>
    </>
  )
}

export default NavBar
