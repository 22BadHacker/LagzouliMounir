import NavBar from "./NavBar";
import Home from './Home'
import About from "../Sections/About";
import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";


export {
    // Component
    NavBar,
    Home,

    // Sections
    About,
}

export const socialLinks= [
    // {href: '/contact', items: <span className="bg-black hover:bg-[rgb(0,0,0,.8)] text-white px-10 rounded-full py-[15px]">Contact me</span>},
    {href: '/contact', items: <FaInstagram className="text-[20.5px] hover:bg-gradient-to-bl from-[#d9307c] to-[#f27935] hover:text-white transition duration-200 ease-in-out bg-white p-[11px] rounded-full size-[50px] " />},
    {href: '/contact', items: <div className='relative text-[26px] hover:bg-[#25d366] hover:text-white transition duration-200 ease-in-out flex justify-center items-center bg-white  rounded-full size-[50px] '> <FaWhatsapp className=" absolute"/></div>},
    {href: '/contact', items: <div className='relative text-[26px] hover:bg-[#0a66c2] hover:text-white transition duration-200 ease-in-out flex justify-center items-center bg-white  rounded-full size-[50px] '> <FaLinkedinIn className=" absolute"/></div>},
    {href: '/contact', items: <FaGithub className=" text-[24px] hover:bg-[rgb(104,103,234,.8)] hover:text-white bg-white p-[10px] rounded-full size-[50px] duration-200 ease-in-out"/>},
]





export const NavLinks = [
    {
        title: "Introduction",
        url: "/",
    },
    {
        title: "My Work",
        url: "/work",
    },
    {
        title: "Who's me",
        url: "/about",
    },
    {
        title: "Get in touch",
        url: "/contact",
    },
]



export const Effect = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div class="absolute  right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400/60 opacity-40 blur-[100px]"></div>
          <div class="absolute  right-1/3 -translate-x-1/2 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400/60 opacity-30 blur-[100px]"></div>
          <div class="absolute  left-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400/40 opacity-50 blur-[100px]"></div>
        </div>
        {/* <div class="absolute bg-[rgb(241,241,241,.1)] backdrop-blur-[100px] top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

    </>
  )
};

export const Effect2 = () => {
    return (
        <div class="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div class="absolute  right-0 top-0 -z-10 m-auto h-[610px] w-[610px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            <div class="absolute left-0  top-1/2 filter-[blur(100px)] -translate-y-1/2 -z-10 m-auto h-[510px] w-[510px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
    )
}