import React from 'react'

// function Rive2

const Contact = () => {
  return (
    <section
      id="contact">
        <div className='py-6 text-[28px] justify-between items-center'>
            <p className='text-center italic font-semibold'>CONTACT</p>
        </div>
        <div className='text-center font-semibold text-[18px]'>
          <h3>Busy! So, if you want to contact, click here to troll yourself when wait me!</h3>
        </div>
        <div className = 'px-48 py-16 grid gap-16 xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 border-solid '>
          <li className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700'>
            <a href="https://open.spotify.com/playlist/3IgKEztujeLCWbLrq9C89d?si=253525e1b0304c99">My Sportify Playlist when I code ( Music is so louded )</a>
          </li>
          <li className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700'>
            <a href='https://www.youtube.com/watch?v=nz7_2tyKOfk'>Mystery Box? Who know something in it?</a>
          </li>
          <li className='flex flex-col px-4 py-4 justify-center rounded-md border-2 border-solid hover:bg-gray-700'>
            <a href='https://www.youtube.com/@Tifo'>My football's channel. Keep calm and share it!</a>
          </li>
        </div>



    </section>
  )
}

export default Contact