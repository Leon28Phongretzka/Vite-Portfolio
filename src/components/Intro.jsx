import React from 'react'
import { useRive } from "@rive-app/react-canvas"

function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "https://public.rive.app/community/runtime-files/1752-3469-coder.riv",
    autoplay: true,
    stateMachines: "Animation 1",
  });
  return (
    <RiveComponent
      autoplay={true}
      // onMouseEnter={() => rive && rive.play()}
      // onMouseLeave={() => rive && rive.pause()}
    />
  );
}

const Intro = () => {
  return (
    // Description in the left side
    <section
      id="home"
      className={`flex md:flex-row flex-col px-6`}
    >
      <div
        className={`flex-1 flex-col xl:px-0 sm:px-8 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">TRAN PHONG</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-[28px] text-white ss:text-[60px] ss:leading-[100px] leading-[75px] w-full">
          Dev, RIVist, Internship
        </h1>
        <p className={`max-w-[470px] mt-5`}>
        Hello, I'm Tr Phong - Ehsapa, a web designer and developer, 
        I am a person who is always curious about new things. 
        Recently I am trying to challenge myself by learning web development
        with ambition to become a specialist.
        Now I am working at
        <a href="https://www.facebook.com/der.zuverlassig" target="_blank"> Die Zuverlässigkeit </a>
        and
        <a href="https://www.facebook.com/NextBundesligaVN" target="_blank"> Next Bundesliga VN </a>
        as a technique support, data analyst and writer.
        </p>
        <ul className='py-4'>
          <li>My Gihub Name: Dimonik Villaiz</li>
          <li><i>Real Name: Tran Phong</i></li>
          <li><i>Age: 20</i></li>
          <li><i>LANG: VIE, ENG, GER</i></li>
        </ul>
      </div>
      
      <div
        className={`flex-1 flex`}
      >
        <div
          className="w-[500px] h-[500px]"
          style={{ transform: "scale(1.2)" }}
        >
          <Simple />
        </div>
      </div>

    </section>
  )
}

export default Intro