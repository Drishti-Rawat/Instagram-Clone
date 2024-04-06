import React from 'react'
import profileimg from "../assets/profileimg.jpg"
import dummyprofile from "../assets/dummyprofile.jpg"
import Suggestionbox from './Suggestionbox'
import { Link } from 'react-router-dom'

const Suggestion = () => {
  return (
    <section className=' '>
        <div className='flex flex-col px-4 gap-3'>
            <div className='flex py-4 gap-1 justify-start items-center'> 
                <span className='border-2  rounded-full'> <img src={profileimg} alt="" className='h-10 rounded-full' /></span>
                <div className='pr-32 pl-1 '>
                    <h3 className='text-[16px] text-black font-[500]'>_apriicus</h3>
                    <h3 className='text-[11px] font-[500] text-gray-500'>DRISHTI...</h3>
                </div>
                <button className='text-blue-500 text-[14px] font-semibold hover:text-blue-900'>Switch</button>

            </div>

            <div className='flex flex-col '> 
               <div className='flex  justify-start content-center'>
                <h2 className='  pr-28 text-[16px] font-semibold text-gray-500'>Suggested for you</h2>
                <Link><span className=' text-[14px] font-semibold hover:text-gray-500'>See All</span></Link>
               </div>
               <div className=' flex flex-col gap-2 py-3'>
                 <Suggestionbox username="Dikshaa" profileimg={dummyprofile}/> 
                 <Suggestionbox username="Dipanshu" profileimg={dummyprofile}/> 
                 <Suggestionbox username="Sakshi" profileimg={dummyprofile}/> 
                 <Suggestionbox username="diya" profileimg={dummyprofile}/> 
                 <Suggestionbox username="Nobody" profileimg={dummyprofile}/> 
                 <Suggestionbox username="Nobody okk " profileimg={dummyprofile}/>  
                
               </div>

               <div>

               </div>

            </div>

        </div>
    </section>
  )
}

export default Suggestion
