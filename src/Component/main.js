import NavBar from "./NavBar";
import Home from './Home'
import AboutContain from "../Sections/AboutContain";
import Work from "../Project/Work";
import Skills from "../Sections/Skills";
import Contact from "../Sections/Contact";
import Form from '../Sections/Form'
import Footer from "../Sections/Footer";
import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaPinterest } from "react-icons/fa";


import Logo from '../Assets/Projects/Logo.svg'
import Bag from '../Assets/Projects/VictoriaBag-min.webp'
import Bottle from '../Assets/Projects/VictoriaBottle-min.webp'
import HMS from '../Assets/Projects/Free-PSD-Modern-Brand-Business-Card-Mockup-min.webp'
import soft from '../Assets/Projects/Free Business Cards on Chair Mockup.webp'
import port from '../Assets/Projects/Mockup-min.webp'
import drag from '../Assets/Projects/drag-&-drab-notes.webp'
import message from '../Assets/Projects/Sans-titre-1.webp'
import guitar from '../Assets/Projects/guitar_next2.webp'
import head from '../Assets/Projects/Headphones_Flyer.webp'
import Poster from '../Assets/Projects/MorocAffiche (2).webp'
import form1  from '../Assets/Projects/up.webp'
import poster2  from '../Assets/Projects/Clear_Shampo_Poster.webp'
import form2 from '../Assets/Projects/sign (1).webp'

// Icons

import { SiJavascript, SiThreedotjs,SiGreensock, SiMongodb, SiNextdotjs, SiBlender ,SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa6";
import { LiaProjectDiagramSolid } from "react-icons/lia"
import { MdAlternateEmail } from "react-icons/md";






export {
    // Component
    NavBar,
    Home,

    // Sections
    AboutContain,

    // Project
    Work,

    // Skiils
    Skills,

    // Contact
    Contact,

    // Form
    Form,

    // Footer
    Footer,
}

export const soLinks = [
    {url: '/', icon: <FaLinkedinIn />},
    {url: '/', icon: <FaGithub />},
    {url: '/', icon: <MdAlternateEmail />},
    {url: '/', icon: <FaPinterest />},
    // {url: '/', icon: <FaWhatsapp />},
    // {url: '/', icon: <FaInstagram />},
]

export const socialLinks= [
    // {href: '/contact', items: <span className="bg-black hover:bg-[rgb(0,0,0,.8)] text-white px-10 rounded-full py-[15px]">Contact me</span>},
    {href: '/contact', items: <FaInstagram className="text-[20.5px] hover:bg-gradient-to-bl from-[#d9307c] to-[#f27935] hover:text-white transition duration-200 ease-in-out bg-white p-[11px] rounded-full size-[50px] " />},
    {href: '/contact', items: <div className='relative text-[26px] hover:bg-[#25d366] hover:text-white transition duration-200 ease-in-out flex justify-center items-center bg-white  rounded-full size-[50px] '> <FaWhatsapp className=" absolute"/></div>},
    {href: '/contact', items: <div className='relative text-[26px] hover:bg-[#0a66c2] hover:text-white transition duration-200 ease-in-out flex justify-center items-center bg-white  rounded-full size-[50px] '> <FaLinkedinIn className=" absolute"/></div>},
    {href: '/contact', items: <FaGithub className=" text-[24px] hover:bg-[#162a6c] hover:text-white bg-white p-[10px] rounded-full size-[50px] duration-200 ease-in-out"/>},
]





export const NavLinks = [
    {
        title: "Introduction",
        url: "/",
    },
    {
        title: "My Work",
        url: "/Projects",
    },
    {
        title: "Who's me",
        url: "/",
    },
    {
        title: "Get in touch",
        url: "/",
        // params: '#getInTouch',


    },
]
// path='/Profile' params={{id: item.id}}



export const Effect = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-[rgb(241,241,241,.5)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
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


export const projectBox = () => [
    {name: 'Victoria', desc: 'Brand Design For Cosmetic Studio', img: {Logo}, img2: {Bag}, img3: {Bottle}}
]



export const graphicTools = [
    {icon: <SiAdobeillustrator />, name: 'Illustrator'},
    {icon: <SiAdobephotoshop />, name: 'Photoshop'},
    {icon: <SiAdobeindesign />, name: 'inDesign'},
]

export const basicLang = [
    {icon: <IoLogoHtml5 className="text-[21px]"/>, name: 'HTML'},
    {icon: <SiJavascript />, name: 'JavaScript'},
    {icon: <FaCss3 />, name: 'CSS'},
    {icon: <FaReact />, name: 'React'},
    {icon: <RiTailwindCssFill />, name: 'TailwindCSS'},
    {icon: <TbBrandFramerMotion />, name: 'Framer Motion'},
    {icon: <GrMysql />, name: 'Mysql'},
    {name: 'PHP', icon: <FaPhp className="text-[30px]"/>},
    {icon: <FaGitAlt className="text-[21px]"/>, name: 'git'},
]

export const upcoming = [
    {icon: <SiAdobepremierepro />, name: 'Premier Pro'},
    {icon: <SiAdobeaftereffects />, name: 'After Effect'},
    {icon: <SiBlender />, name: 'Blender'},
    {icon: <SiNextdotjs />, name: 'Nextjs'},
    {icon: <SiMongodb />, name: 'MongoDB'},
    {icon: <SiGreensock className="text-[23px]" />, name: 'gsap'},
    {icon: <SiThreedotjs className="text-[23px]" />, name: 'Threejs'},
    {icon: <LiaProjectDiagramSolid className="text-[23px]" />, name: 'Project Management'},
]


export const projectPage = [
    {img: <img src={Bag} className='object-cover h-[400px]  w-full rounded-xl' alt="" /> , name: 'Victoria', desc: 'Logo for Cosmitic Brand', icon1: <SiAdobeillustrator className="text-[#001e36]"/>, icon2: <SiAdobephotoshop className="text-[#330000]"/>},
    {img: <img src={message} className='object-cover h-[360px]  w-full rounded-xl' alt="" /> , name: 'Notfication', desc: 'Web app', icon1: <IoLogoHtml5 className="text-[#e34f26] text-[22px] " />, icon2: <FaCss3 className="text-[#254bdd]"/>},
    {img: <img src={port} className='object-cover h-[380px] aspect-video  w-full rounded-xl' alt="" /> , name: 'My Portfolio', desc: 'Personal Portfolio', icon1: <SiAdobeillustrator className="text-[#001e36]"/>, icon2: <SiAdobephotoshop className="text-[#330000]"/>, icon3: <SiJavascript className="text-[#f7df1e]"/>, icone4: <FaCss3 className="text-[#1572b6]"/>, icone5: <IoLogoHtml5 className="text-[#e34f26] text-[22px] " />},
    {img: <img src={guitar} className='object-cover h-[360px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Guitar Class', desc: 'Flayer', icon2: <SiAdobephotoshop className="text-[#330000]"/>},
    {img: <img src={HMS} className='object-cover h-[380px] aspect-video  w-full rounded-xl' alt="" /> , name: 'HMS Proprete', desc: 'Business Card', icon1: <SiAdobeillustrator className="text-[#fff]"/>, icon2: <SiAdobephotoshop className="text-[#fff]"/>},
    {img: <img src={poster2} className='object-cover h-[360px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Clear Shampo', desc: 'Poster', icon2: <SiAdobephotoshop className="text-[#fff]"/>},
    {img: <img src={soft} className='object-cover h-[410px] aspect-video  w-full rounded-xl' alt="" /> , name: 'MEAGASOFT', desc: 'Business Card', icon1: <SiAdobeillustrator className="text-[#fff]"/>, icon2: <SiAdobephotoshop className="text-[#fff]"/>},
    {img: <img src={head} className='object-cover h-[300px] aspect-video  w-full rounded-xl' alt="" /> , name: 'JBL', desc: 'Headphones Flayer',  icon2: <SiAdobephotoshop className="text-[#fff]"/>},
    {img: <img src={Poster} className='object-cover h-[350px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Morocco Post', desc: 'Poster',  icon2: <SiAdobephotoshop className="text-[#fff]"/>},
    {img: <img src={form1} className='object-cover h-[350px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Heaven Made', desc: 'Sign up Form', icon1: <IoLogoHtml5 className="text-[#e34f26] text-[22px] " />, icon2: <FaCss3 className="text-[#254bdd]"/>, icon3: <SiJavascript className="text-[#f7df1e]"/>},
    {img: <img src={drag} className='object-cover h-[380px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Drag & Drop', desc: 'Web App', icon1: <IoLogoHtml5 className="text-[#e34f26] text-[22px] " />, icon2: <FaCss3 className="text-[#254bdd]"/>, icon3: <SiJavascript className="text-[#f7df1e]"/>},
    {img: <img src={form2} className='object-cover h-[320px] aspect-video  w-full rounded-xl' alt="" /> , name: 'Illusion Studio', desc: 'Sign up Form', icon1: <IoLogoHtml5 className="text-[#e34f26] text-[22px] " />, icon2: <FaCss3 className="text-[#254bdd]"/>, icon3: <SiJavascript className="text-[#f7df1e]"/>},
    
]


