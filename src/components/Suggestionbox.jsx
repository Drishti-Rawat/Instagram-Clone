import React from 'react'

const Suggestionbox = ({username,profileimg}) => {
  return (
    <div className='flex  gap-3 justify-start items-center'> 
    <span className='border-2  rounded-full'> <img src={profileimg} alt="" className='h-10 rounded-full' /></span>
    <div className='pr-20 pl-1 '>
        <h3 className='text-[16px] text-black font-[500]'>{username}</h3>
        <h3 className='text-[11px] font-[500] text-gray-500'>Suggested for you</h3>
    </div>
    <button className='text-blue-500 text-[14px] font-semibold hover:text-blue-900'>Switch</button>

</div>
  )
}

export default Suggestionbox
