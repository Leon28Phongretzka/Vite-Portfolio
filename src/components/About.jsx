import React from 'react'
import { SiThreedotjs, SiReact } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import {FaNodeJs, FaDiscord} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";
const About = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col px-6`}
    >
      <div className='flex-1 flex-col xl:px-0 sm:px-8 px-6'>
        <div className='py-6 text-[28px] justify-between items-center'>
          <p className='text-center'>ACHIEVEMENTS</p>
        </div>
        <div
          className='flex md:flex-row flex-col px-6 max-w-[600px] text-[18px]'
        >
          <p>
          Currently I am a third-year student at the Post and Telecommunications Institute of Technology (PTIT).
          And my current major is Electronic Telecommunications. Although my currently major, I want to try myself
          to become a web developer. Not because of trending, I want to learn this and improve myself.
          Now my GPA is 3.51/4.0 after 5 semesters of studying and I think I can improve it go hand in hand with my
          development skills.
          </p>
        </div>
      </div>
      
      <div className='flex-1 flex justify-center items-center'>
        <div className='px-8 py-4 text-[28px] justify-between items-center'>
          <p className='text-center'>TECH STACK</p>
          <ul>
            <li className="py-6 grid gap-4 grid-cols-3 grid-rows-2">
              <i className='px-6 py-4 text-[16px] text-center'><SiThreedotjs className='text-[88px]'/>ThreeJS</i>
              <i className='px-6 py-4 text-[16px] text-center'><SiReact className='text-[88px]'/>React</i>
              <i className='px-6 py-4 text-[16px] text-center'><TbBrandNextjs className='text-[88px]'/>NextJS</i>
              <i className='px-6 py-4 text-[16px] text-center'><FaNodeJs className='text-[88px]'/>NodeJS</i>
              <i className='px-6 py-4 text-[16px] text-center'><DiMongodb className='text-[88px]'/>MongoDB</i>
              <i className='px-6 py-4 text-[16px] text-center'><FaDiscord className='grid text-[88px]'/>DiscordJS</i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About