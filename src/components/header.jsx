import React from 'react'
import banner1 from '../assets/images/banner1.png';


const header = () => {

  return (

    <>
    {/* mobile version */}
    <div className='flex w-full p-4 custom-border h-auto items-center flex-col '>
        <span className='font-bold text-3xl py-1 font-muli'>Virtual </span>
        <span className='font-bold text-3xl py-1 font-muli'>healthcare</span>
        <span className='font-bold text-3xl py-1 font-muli'>for you</span>

        <span className='pt-2 text-center break-words w-[90%] font-muli text-base text-[#7D7987] '>Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone</span>
            
<button class=" mt-4 font-muli font-bold text-white bg-[#458FF6] py-2 px-4 rounded-full">Consult today</button>

<img className=' mt-5' src={banner1} alt="banner1" />
   


      
    </div>

    {/* end of mobile version */}
    </>
  )
}

export default header