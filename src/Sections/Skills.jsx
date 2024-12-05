import React from 'react'
import { graphicTools, basicLang, upcoming } from '../Component/main'


const Skills = () => {
  return (
    <div className='w-full relative h-auto rounded-3xl overflow-hidden shadow-[2px_2px_4px_rgba(0,0,0,.15)] flex gap-0 flex-col py-5 md:px-5 px-4 lg:px-10'>
        <div class="absolute top-0 left-0 -z-10 h-full w-full bg-[rgb(200,246,215,.3)]  "><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,219,0.5)] opacity-50 blur-[80px]"></div></div>
        <p className='headLine text-center pb-[60px] text-[35px] flex flex-col items-center  font-open-sans tracking-wide'>Presenting My Real Heroes</p>
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 w-full gap-10">

          {/* First Half */}

          <div className="flex flex-col justify-between  lg:gap-0 gap-8">
              <div className="flex flex-col gap-2">
                  <p className='text-[18px] mb-2 font-transforma pl-2 pb-1 flex items-center gap-2 cursor-pointer pt-2  bg-blue-300'>My Tools For Graphic Design</p>
                  
                  {
                    graphicTools.map((tool, i) => {
                      const {icon, name} = tool

                      return(
                        
                          <div className="flex gap-2 items-center hover:text-blue-400/90 duration-200 ease-linear text-[18px] font-open-sans relative lg:left-5 cursor-pointer">
                            
                              <span>{icon}</span>
                              <p>{name}</p>
                          </div>
                      )
                    })
                  }

              </div>

              <div className="flex flex-col gap-2 md:pt-4">
                  <p className='text-[18px] font-transforma pl-2 pb-1 flex items-center gap-2 cursor-pointer pt-2  bg-yellow-300 '>What i'm good at as Developer</p>

                  <div className="gap-2 pt-2 gap-y-4 lg:gap-y-3 grid grid-cols-2 lg:grid-cols-3 ">
                    {
                      basicLang.map((tool, i) => {
                        const {icon, name} = tool

                        return(
                            <div className="flex gap-2 items-center hover:text-yellow-300 duration-200 ease-linear text-[18px] font-open-sans relative lg:left-5 cursor-pointer">
                              
                                <span>{icon}</span>
                                <p>{name}</p>
                            </div>
                        )
                      })
                    }

                  </div>
              </div>
          </div>

          {/* Second Chapter */}

          <div className="flex w-full flex-col gap-2">
              <p className='text-[18px] font-transforma pl-2 pb-1 flex items-center gap-2 cursor-pointer pt-2  bg-green-300'>Things I've Start to learn</p>
              <div className="gap-2 pt-2 gap-y-5 grid grid-cols-2 ">
                      {
                        upcoming.map((tool, i) => {
                          const {icon, name} = tool

                          return(
                              <div className="flex gap-2 hover:text-green-400/70 duration-200 ease-linear items-center text-[18px] font-open-sans relative lg:left-5 cursor-pointer">
                                
                                  <span>{icon}</span>
                                  <p>{name}</p>
                              </div>
                          )
                        })
                      }

                </div>
          </div>
                  




        </div>
      
    </div>
  )
}

export default Skills
