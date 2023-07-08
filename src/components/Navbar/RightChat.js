import React from 'react'
import BubleChat from '../chat/BubleChat'


const RightChat = () => {
    const data = [
        {
            "text":"1",
            "id" : 1
        },
        {
            "text":"2",
            "id" : 2
        },
        {
            "text":"3",
            "id" : 3
        },
        {
            "text":"4",
            "id" : 4
        }
    ]
  return (
    <div className='w-full overflow-y-auto h-full bg-gray-400 mt-5 rounded'>
        {data.map((data,index)=>(
            <BubleChat key={index} data={data} id={data.id} myid={1}/>
        ))}
        
    </div>
  )
}

export default RightChat