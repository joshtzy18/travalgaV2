import React from 'react'

const footer = () => {
  return (
    <>
    {/* mobile view */}
    <div id='about-us' className=' w-full flex justify-center items-center h-auto pt-20 pb-5 px-12 gap-y-4 flex-col bg-gradient-to-r from-[#67C3F3] to-[#5A98F2]'>
        
          {/* logo in the footer */}
    <div className='flex flex-row gap-x-2  justify-center items-center'>
    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
        <span className="text-lg font-bold font-muli bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] bg-clip-text text-transparent">T</span>
        </div>

        <span className='font-bold font-muli text-base text-white '>Trafalgar</span>
        </div>

        <span className='text-center break-words font-muli font-light text-white text-xs opacity-75'>
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
        for everyone
        </span>

        <div className='flex flex-wrap w-full h-auto custom-border gap-x-20 gap-y-10'>
          
            <ul className='flex gap-2 flex-col'>
            <span className=' mb-3 font-muli font-semibold text-white '>Company</span>
                <li className='font-light font-muli text-xs text-white opacity-75'>About</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Testimonials</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Find a doctor</li>  
                <li className='font-light font-muli text-xs text-white opacity-75'>Apps</li>

            </ul>

            <ul className='flex gap-2 flex-col'>
            <span className=' mb-3 font-muli font-semibold text-white '>Region</span>
                <li className='font-light font-muli text-xs text-white opacity-75'>Indonesia</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Singapore</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Hongkong</li>  
                <li className='font-light font-muli text-xs text-white opacity-75'>Canada</li>

            </ul>
            <ul className='flex gap-2 flex-col'>
            <span className=' mb-3 font-muli font-semibold text-white '>Help</span>
                <li className='font-light font-muli text-xs text-white opacity-75'>Help center</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Contact support</li>
                <li className='font-light font-muli text-xs text-white opacity-75'>Instructions</li>  
                <li className='font-light font-muli text-xs text-white opacity-75'>How it works</li>

            </ul>
             
        </div>
        <span className='font-muli font-thin text-white text-xs opacity-75'>©Trafalgar PTY LTD 2020. All rights reserved</span>
    </div>
    </>
  )
}

export default footer