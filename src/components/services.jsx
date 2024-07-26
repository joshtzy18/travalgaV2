import React from 'react'
import search from '../assets/images/search.png';
import pharmacy from '../assets/images/pharmacy.png';
import consultation from '../assets/images/consultation.png';
import details from '../assets/images/details.png';
import emergency from '../assets/images/emergency.png';
import tracking from '../assets/images/tracking.png';
import leading from '../assets/images/leading.png';


const services = () => {
  return (
    <>


  {/* mobile version */}
     {/* Our services */}

     <div className= 'pt-8 flex flex-col items-center'>
          <span className=' font-muli font-bold text-[32px]'>Our services</span>

          {/* underline div */}

         <hr className='mt-1 mb-6 custom-hr ml'  />

         <span className=' text-[#7D7987] leading-5 w-[85%] text-center text-sm font-muli font-light'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</span>

          {/* services container */}
         <div className='flex flex-wrap justify-center items-center gap-4 pt-8'>

          {/* service 1 */}
          <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={search}/>

              <span className=' font-muli font-bold text-lg pt-4'>Search doctor</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>Choose your doctor from thousands of specialist, general, and trusted hospitals</span>
            </div>

             {/* service 2 */}
             <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={pharmacy}/>

              <span className=' font-muli font-bold text-lg pt-4'>Online pharmacy</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>Buy your medicines with our mobile application with a simple delivery system</span>
            </div>

             {/* service 3 */}
             <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={consultation}/>

              <span className=' font-muli font-bold text-lg pt-4'>Consultation</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>Free consultation with our trusted doctors and get the best recomendations</span>
            </div>

             {/* service 4 */}
             <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={details}/>

              <span className=' font-muli font-bold text-lg pt-4'>Details info</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>Free consultation with our trusted doctors and get the best recomendations</span>
            </div>

             {/* service 5 */}
             <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={emergency}/>

              <span className=' font-muli font-bold text-lg pt-4'>Emergency care</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>You can get 24/7 urgent care for yourself or your children and your
              lovely family</span>
            </div>

               {/* service 6 */}
               <div className='flex flex-col items-center w-[80%] bg-[#ffffff] custom-border rounded-md h-auto'>
              <img className='pt-6' src={tracking}/>

              <span className=' font-muli font-bold text-lg pt-4'>Tracking</span>
              <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-6 w-[90%]'>Track and save your medical history and health data </span>
            </div>


            <button class=" mt-4 mb-2 font-muli font-extralight border-[1.4px] text-[#458FF6] border-[#458FF6] py-2 px-4 rounded-full">Consult today</button>
      
            
         </div>

         <div className='flex flex-col justify-center items-center'>
         <img className='pt-6 mb-4' src={leading}/>

         {/* <span className=' font-muli font-bold text-lg pt-4'>Leading healthcare providers</span> */}
         <span className=' font-muli font-bold text-xl'>Leading healthcare providers</span>
         <hr className='mt-1 mb-2 custom-hr2'  />

         <span className=' font-muli leading-6 font-light text-[#7D7987] text-sm text-center pt-2 pb-2 w-[80%]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
         in the solutions we deliver </span>

         <button class=" mt-2 mb-8 font-muli text-sm font-extralight border-[1.4px] text-[#458FF6] border-[#458FF6] py-2 px-4 rounded-full">Learn more</button>

         </div>
      </div>

      {/* end of mobile version */}

    </>
  )
}

export default services