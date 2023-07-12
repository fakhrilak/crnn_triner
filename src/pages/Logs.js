import React,{useState} from 'react'
import { url } from '../config/API'
import CompLogs from '../components/Logs/CompLogs'
import MyTerminal from '../components/MyTerminal/MyTerminal'

const Logs = () => {
    const [api,setApi] = useState(url)
    const [sumlog,setSumlog] = useState(
        [
            {"name" : "Example"},
            {"name" : "Trining v"}
        ]
    )
  return (
    <div className='bg-gray-900 min-h-screen'>
      {/* <Navbar/> */}
      <div className='w-11/12 m-auto text-center pt-5'>
          <input
          type='text'
          className='w-5/12 rounded text-black text-center h-10'
          placeholder='Please Insert Base URL'
          value={api}
          onChange={(e)=>setApi(e.target.value)}
          />
      </div>
      <div className='grid grid-cols-2 w-11/12 m-auto gap-5'>
            {sumlog.map((data,index)=>(
                <CompLogs index={index} key={index} data={data} api={api}/>
            ))}
      </div>
      <div className='w-10/12 m-auto mt-44'>
        <MyTerminal api={api}/>
      </div>
    </div>
  )
}

export default Logs