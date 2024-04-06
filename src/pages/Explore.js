import React from 'react'
import Sidebar from '../components/Sidebar'
import Exploregrid from '../components/Exploregrid'

function Explore() {
  return (
    <section className='flex justify-between border '>
         <div className='border'>
            
                <Sidebar/>
        
        </div>
        <div className='flex  px-8 border '>
            
            <div className='px-8'>

            
        <div>
            <Exploregrid/>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Explore
