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

      <div className='flex-1 flex-col xl:px-0 sm:px-8 px-6'>
        <div className='py-6 text-[28px] justify-between items-center'>
          <p className='px-16 text-left'>ACHIEVEMENTS</p>
        </div>
        <div
          className='flex md:flex-row flex-col text-[18px] px-16 max-w-[600px]'
        >
          <p className='text-justify'>
          <li><i>Third-year Student PTIT with GPA 3.51/4.0</i></li>
          <li><i>Achieve scholarship from PTIT 5 semesters </i></li>
          <li><i>Top 5 GPA of Telecommunication D20 PTIT till now</i></li>
          <li><i>Codeforces Pupil</i></li>
          <li><i>Work at 
            <a href="https://www.facebook.com/der.zuverlassig/"> Die Zuverlässigkeit</a>
            : 2022-now</i></li>
          <li><i>Work at 
            <a href="https://twitter.com/Der_Augustus"> Der Augustus</a>
            : 2020-now</i></li>
          <li><i>Work at 
            <a href="https://www.facebook.com/wearehlvonline"> Huan Luyen Vien Online</a>
            : 2022-now</i></li>

          </p>
        </div>
      </div>
    </section>
  )
}

export default About