import React from 'react'

const BubleHistoryChat = ({index,data}) => {
  return (
    <div>
        <div
        className="w-11/12 m-auto bg-gray-400 h-20 rounded mt-2 grid grid-cols-10 border-2 border-black"
        >
            <div className='w-full col-span-2'>
                <img src={data.img?data.img:null} className="w-16 h-16 mt-2 ml-2 text-center"/>
            </div>
            <div className='col-span-7'>
                <p className='font-bold ml-1 truncate ...'>{data.name?data.name:null}</p>
                <p className='text-sm mt-8 truncate ...'>{data.last_chat?data.last_chat:null}</p>
            </div>
            <div>
                <p className='text-sm text-right mr-1 mt-14'>23.00</p>
            </div>
        </div>
    </div>
  )
}

export default BubleHistoryChat