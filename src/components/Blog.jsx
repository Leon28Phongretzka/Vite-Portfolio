import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { SiThreedotjs, SiReact } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import {FaNodeJs, FaDiscord} from "react-icons/fa";
import {TbBrandNextjs, TbMathIntegral, TbMathFunctionOff} from "react-icons/tb";
import {SiCplusplus, SiJavascript, SiPython, SiFastapi, SiFacebook} from "react-icons/si";
const Blog = () => {
  return (
    <section
      id="blog"
    >
      <div className='py-6 text-[28px] justify-between items-center'>
        <p className='text-center italic font-semibold'>MY ARTWORK</p>
      </div>
      <div className='px-24 grid gap-6 xl:grid-cols-3 xl:grid-rows-2 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 border-solid'>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://github.com/Leon28Phongretzka/API_ExpressingJS">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>API ExpressJS</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            This is my API for some DJ/Producer information from Spotify
            This project hasn't design Front-End, it's only Back-End and
            I use ExpressJS to build this API.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><FaNodeJs className='text-[28px]'/></i>
            <i><DiMongodb className='text-[28px]'/></i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://github.com/Leon28Phongretzka/Mo_phong_truyen_thong">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>MATLAB CODE</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            This is my MATLAB code for system of the two course            
            Radiocommunication engineering and Communication 
            system simulation. Hope it useful for anyone needs.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><TbMathFunctionOff className='text-[28px]'/></i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://github.com/Leon28Phongretzka/Pro-Chat">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>Pro Chat</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            The project is a chat application that allows users to register
            login and chat in the room in the real-time. The project is the
            coboration between seven members in the  
            <a href="https://oversimplified-landingpage-1.netlify.app/"> Oversimplified </a>
            group.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><SiReact className='text-[28px]'/></i>
            <i><FaNodeJs className='text-[28px]'/></i>
            <i><DiMongodb className='text-[28px]'/></i>
            <i><SiPython className='text-[28px]'/></i>
            <i><SiFastapi className='text-[28px]'/></i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://github.com/Leon28Phongretzka/Landing-Page">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>Oversimplified</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            This is the landing page of the
            <a href="https://oversimplified-landingpage-1.netlify.app/"> Oversimplified </a>
            group.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><SiReact className='text-[28px]'/></i>
            <i><SiJavascript className='text-[28px]'/></i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://github.com/Leon28Phongretzka/Dark_Susss_Algorithm">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>DSA PTIT</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            DSA opencoding PTIT and some Codeforces problems
            I was solved from past till now.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><SiCplusplus className='text-[28px]'/></i>
            <i><SiJavascript className='text-[28px]'/></i>
          </div>
        </div>
        <div className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700 hover:text-white'>
          <a href="https://www.facebook.com/der.zuverlassig/">
            <AiFillGithub className='text-[68px] sm:text-[28px]'/>
            <p className='text-[20px]'>My Mystery Blog</p>
          </a>
          <p className='text-[20px]'>Description</p>
          <p className='pb-20 text-justify'>
            Football blog for everybody.
          </p>
          <div className='grid gap-0 grid-cols-8 grid-rows-1'>
            <i><SiFacebook className='text-[28px]'/></i>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog