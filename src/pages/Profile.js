import React from 'react'
import Sidebar from '../components/Sidebar'

const Profile = () => {
  return (
    <section className='flex justify-between '>
        <div className='border  '>
            <Sidebar/>
        </div>

        <div className='border-2 border-blue-500  flex-grow'>  
            <div>
                heyy 
            </div>
        </div>
    </section>
  )
}

export default Profile
