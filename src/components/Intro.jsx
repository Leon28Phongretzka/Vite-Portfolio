import React from 'react'
import { useRive } from "@rive-app/react-canvas";

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
        className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">TRAN PHONG</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[28px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Dev, Ravist, Internship
        </h1>
        <p className={`max-w-[470px] mt-5`}>
        Hello, I'm Tr Phong - Ehsapa, a web designer and developer, 
        I am a person who is always curious about new things. 
        Recently I am trying to challenge myself by learning web development
        with ambition to become a specialist.
        Now I am working at
        <a href="https://www.facebook.com/der.zuverlassig" target="_blank"> Die Zuverlässigkeit </a>
        and
        <a href="https://www.facebook.com/NextBundesligaVN" target="_blank"> NextBundesliga VN </a>
        as a technique support, data analyst and writer.
        </p>
      </div>

      <div
        className={`flex-1 flex md:my-0 my-10 relative`}
      >
        <div
          className="w-[100%] h-[88%] relative z-[5]"
          style={{ transform: "scale(1.2)" }}
        >
          <Simple />
        </div>
      </div>

    </section>
  )
}

export default Intro