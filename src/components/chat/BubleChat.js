import React from 'react'

const BubleChat = ({data,id,myid}) => {
    
  return id == myid?(
    <div className='grid grid-cols-2 mt-2'>
        {/* ##########Right */}
        <div className='grid grid-cols-10 '/>
        <div className='grid grid-cols-10 '>
            <div className='col-span-8 rounded bg-gray-800 w-auto'>
                <p className='mt-1 mb-1 ml-2'>{data.text}</p>
            </div>
            <div className=''>
                <img src="https://blogger.zilog.online/static/media/logo.436f1557.png"
                className='w-10 h-10 ml-1 mt-1'
                />
            </div>
        </div>
    </div>
  ):(
    <div className='grid grid-cols-2 mt-2'>
        {/* ##########left */}
        <div className='grid grid-cols-10 '>
            <div className=''>
                <img src="https://blogger.zilog.online/static/media/logo.436f1557.png"
                className='w-10 h-10 ml-1 mt-1'
                />
            </div>
            <div className='col-span-8 rounded bg-white w-auto'>
                <p className='mt-1 mb-1 ml-2'>{data.text}</p>
            </div>
        </div>
        <div className='grid grid-cols-10 '/>
    </div>
  )
}

export default BubleChat