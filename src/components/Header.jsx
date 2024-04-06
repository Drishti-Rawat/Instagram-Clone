import React from 'react'
import Story from './Story'
import profileimg from "../assets/profileimg.jpg"
// import dummyprofile from "../assets/dummyprofile.jpg"

const Header = () => {
  return (
    <div className='  py-4 width-full flex content-center justify-center  '>
        <div className='flex px-2 py-2   content-centers-center justify-center'> 
          
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            <Story profileimg={profileimg} username="drishti" />
            
            
        </div>
      
    </div>
  )
}

export default Header
