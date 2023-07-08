import React from 'react'
import LeftChat from './LeftChat'
import RightChat from './RightChat'

const Navbar = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-12/12 h-16 m-auto bg-gray-400'>
            <div className='w-11/12 m-auto grid grid-cols-2'>
                <img src="https://blogger.zilog.online/static/media/logo.436f1557.png" 
                className='w-16 h-16 p-2'/>
                <p className='text-right'>chat app</p>
            </div>
        </div>
        <div className='w-11/12 h-20 m-auto rounded grid grid-cols-3'>
            <div className="h-96">
                <div className='w-11/12 m-auto'>
                    <input
                    className='w-full mt-5 mb-5 rounded h-10 text-center border-2 border-black'
                    placeholder='Search'
                    />
                </div>
                <LeftChat/>
            </div>
            <div className='col-span-2 h-96'>
                <RightChat/>
            </div>
        </div>
    </div>
  )
}

export default Navbar