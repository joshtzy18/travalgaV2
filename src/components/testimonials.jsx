import React from 'react'
import profile from '../assets/images/profile-testimonials.png';
import Right from '@mui/icons-material/EastOutlined';
import Left from '@mui/icons-material/KeyboardBackspaceOutlined';
import Dot from '@mui/icons-material/FiberManualRecordOutlined';
import Dotfill from '@mui/icons-material/FiberManualRecord';
import { blue } from '@mui/material/colors';

const testimonials = () => {
  return (
    <>

    {/* mobile view version */}
<div class="bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] w-full h-auto p-10 flex justify-center flex-col items-center ">
    <span className=' font-muli text-lg font-bold leading-6 text-white'>What our customer are saying</span>
    <hr className='mt-1 mb-2 custom-hr3'  />

    <div className='flex flex-col items-center mt-6'>
        {/* profile image here */}
        <img className='h-28 w-28 mb-2' src={profile} alt="profile" />

        {/* name here  */}
        <span className=' font-muli text-md leading-6 font-bold text-white '>Edward Newgate</span>

        {/* position here */}

        <span className='font-muli text-xs font-normal text-white opacity-70'>Founder Circle</span>

        <span className=' font-muli font-light mt-4 text-center text-white opacity-75'>“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</span>
    </div>

  
</div>

  {/* arrow next */}
  <div className='flex flex-row items-center mt-2 p-4 gap-x-3 w-full justify-center '>
            <button className=' cursor-pointer mr-10'><Left sx={{ color: blue[500], opacity: 0.5 }} /></button>
           <button className=' cursor-pointer'> <Dotfill fontSize="extra-small" sx={{ color: blue[500]}} /></button>
          <button className=' cursor-pointer'> <Dot fontSize="extra-small" sx={{ color: blue[500]}}  /></button> 
           <button className=' cursor-pointer'><Dot fontSize="extra-small" sx={{ color: blue[500]}}  /></button> 
          <button className=' cursor-pointer'><Dot fontSize="extra-small" sx={{ color: blue[500]}}  fontColor="blue-500" /></button>  
           <button className=' cursor-pointer ml-10'> <Right sx={{ color: blue[500] }}/></button>


        </div>

{/* end of mobile view version */}
    </>
  )
}

export default testimonials