import React from 'react'
import BubleHistoryChat from '../chat/BubleHistoryChat'


const data = [
    {
        "name":"tost dbwebcjcb jbdjewbjebfc jbd vdvdvfv adad",
        "last_chat":"helo ini lastchat",
        "img" : "https://blogger.zilog.online/static/media/logo.436f1557.png"
    },
    {
        "name":"tost",
        "last_chat":"helo ini lastchat",
        "img" : "https://blogger.zilog.online/static/media/logo.436f1557.png"
    },
    {
        "name":"test",
        "last_chat":"helo ini lastchat",
        "img" : "https://blogger.zilog.online/static/media/logo.436f1557.png"
    }
]
const LeftChat = () => {
  return (
    <div className='w-full overflow-y-auto overflow-y-auto h-full '>
        <div>
            {data.map((data,index)=>(
                <BubleHistoryChat data={data}key={index}/>
            ))}
        </div>
    </div>
  )
}

export default LeftChat