import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { SiThreedotjs, SiReact } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import {FaNodeJs, FaDiscord} from "react-icons/fa";
import {TbBrandNextjs, TbMathIntegral, TbMathFunctionOff} from "react-icons/tb";
import {SiCplusplus, SiJavascript, SiPython, SiFastapi} from "react-icons/si";
const Blog = () => {
  return (
    <section>
      <div className='py-6 text-[28px] justify-between items-center'>
        <p className='text-center font-semibold'>MY</p>
        <p className='text-center italic font-semibold'>ARTWORK</p>
      </div>
      <div className='grid gap-4 grid-cols-3 grid-rows-2 border-solid'>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid'>
          <a href="https://github.com/Leon28Phongretzka/API_ExpressingJS">
            <AiFillGithub className='text-[68px]'/>
            <p className='text-[20px]'>API ExpressJS</p>
          </a>
          <p>Description</p>
          <p className='pb-20'>
            This is my API for some DJ/Producer information from Spotify
            This project hasn't design Front-End, it's only Back-End and
            I use ExpressJS to build this API.
          </p>
          <div className='grid gap-0 grid-cols-4 grid-rows-1'>
            <i><FaNodeJs className='text-[48px]'/>NodeJS</i>
            <i><DiMongodb className='text-[48px]'/>MongoDB</i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid'>
          <a href="https://github.com/Leon28Phongretzka/Mo_phong_truyen_thong">
            <AiFillGithub className='text-[68px]'/>
            <p className='text-[20px]'>MATLAB CODE</p>
          </a>
          <p>Description</p>
          <p className='pb-20'>
            This is my MATLAB code for system of the two course            
            Radiocommunication engineering and Communication 
            system simulation. Hope it useful for anyone needs.
          </p>
          <div className='grid gap-0 grid-cols-4 grid-rows-1'>
            <i><TbMathFunctionOff className='text-[48px]'/>MATLAB</i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid'>
          <a href="https://github.com/Leon28Phongretzka/Pro-Chat">
            <AiFillGithub className='text-[68px]'/>
            <p className='text-[20px]'>Pro Chat</p>
          </a>
          <p>Description</p>
          <p className='pb-20'>
            The project is a chat application that allows users to register
            login and chat in the room in the real-time. The project is the
            coboration between seven members in the  
            <a href="https://oversimplified-landingpage-1.netlify.app/"> Oversimplified </a>
            group.
          </p>
          <div className='grid gap-0 grid-cols-5 grid-rows-1'>
            <i><SiReact className='text-[36px]'/>ReactJS</i>
            <i><FaNodeJs className='text-[36px]'/>NodeJS</i>
            <i><DiMongodb className='text-[36px]'/>MongoDB</i>
            <i><SiPython className='text-[36px]'/>Python</i>
            <i><SiFastapi className='text-[36px]'/>FastAPI</i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid'>
          <a href="https://github.com/Leon28Phongretzka/Landing-Page">
            <AiFillGithub className='text-[68px]'/>
            <p className='text-[20px]'>Oversimplified</p>
          </a>
          <p>Description</p>
          <p className='pb-20'>
            This is the landing page of the
            <a href="https://oversimplified-landingpage-1.netlify.app/"> Oversimplified </a>
            group.
          </p>
          <div className='grid gap-0 grid-cols-5 grid-rows-1'>
            <i><SiReact className='text-[48px]'/>ReactJS</i>
            <i><SiJavascript className='text-[48px]'/>JavaScript</i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid'>
          <a href="https://github.com/Leon28Phongretzka/Dark_Susss_Algorithm">
            <AiFillGithub className='text-[68px]'/>
            <p className='text-[20px]'>DSA PTIT</p>
          </a>
          <p>Description</p>
          <p className='pb-20'>
            DSA opencoding PTIT and some Codefrogs...Codeforces problems
            I was solved from past till now.
          </p>
          <div className='grid gap-0 grid-cols-4 grid-rows-1'>
            <i><SiCplusplus className='text-[48px]'/>Cplusplus</i>
            <i><SiJavascript className='text-[48px]'/>JavaScript</i>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog