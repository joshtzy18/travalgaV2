import React from 'react'
import pic1 from '../assets/images/pic1.png';
import EastIcon from '@mui/icons-material/East';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';



const articles = () => {
  return (
    // mobile view 
    <div className='flex flex-col justify-center items-center mt-8'>
         <span className=' font-muli font-bold text-xl'>Checkout our latest article</span>
         <hr className='mt-1 mb-2 custom-hr4'  />

         <div className='flex flex-col gap-5 justify-center items-center w-[80%] custom-border'>
            <div className=' flex flex-col justify-center h-auto w-full rounded-lg shadow-lg pt-1 custom-border'>
                <img className=' object-fill' src={pic1} alt="pic1" />
                <div className=' w-full flex flex-col items-center justify-center custom-border gap-1 mt-3'>
                <span className=' font-muli text-start w-[85%] custom-border text-sm font-semibold '>Disease detection, check 
                up in the laboratory</span>
                <span className=' font-muli text-start w-[85%] custom-border text-sm font-extralight text-[#7D7987] opacity-60'>In this case, the role of the health laboratory is very important to do
                a disease detection...</span>
                <span className=' flex justify-center items-center gap-x-2 my-1 text-[#4089ED] font-normal font-muli text-sm'>Read more <EastIcon fontSize='extra-small'/> </span>
                </div>

             
            </div>

            <div className=' flex flex-col justify-center h-auto w-full custom-border rounded-lg shadow-lg pt-1'>
                <img className=' object-fill' src={pic2} alt="pic2" />
                <div className=' w-full flex flex-col items-center justify-center custom-border gap-1 mt-3'>
                <span className=' font-muli text-start w-[85%] custom-border text-sm font-semibold '>Herbal medicines that are 
                safe for consumption</span>
                <span className=' font-muli text-start w-[85%] custom-border text-sm font-extralight text-[#7D7987] opacity-60'>Herbal medicine is very widely used at this time because of its very good for your health...</span>
                <span className=' flex justify-center items-center gap-x-2 my-1 text-[#4089ED] font-normal font-muli text-sm'>Read more <EastIcon fontSize='extra-small'/> </span>
                </div>

             
            </div>

            <div className=' flex flex-col justify-center h-auto w-full rounded-lg shadow-lg pt-1 custom-border'>
                <img className=' object-fill' src={pic3} alt="pic3" />
                <div className=' w-full flex flex-col items-center justify-center custom-border gap-1 mt-3'>
                <span className=' font-muli text-start w-[85%] custom-border text-sm font-semibold '>Natural care for healthy 
                facial skin</span>
                <span className= ' font-muli text-start w-[85%] custom-border text-sm font-extralight text-[#7D7987] opacity-60'>A healthy lifestyle should start from now and also for your skin health.
                There are some...</span>
                <span className=' flex justify-center items-center gap-x-2 my-1 text-[#4089ED] font-normal font-muli text-sm'>Read more <EastIcon fontSize='extra-small'/> </span>
                </div>

             
            </div>

            <Button
        sx={{ mb: 5, borderRadius: 5, px: 5, textTransform: 'none', fontFamily: "muli", fontWeight: 700 }} variant="outlined">View all</Button>
         </div>

    </div>
    // end of mobile view
  )
}

export default articles