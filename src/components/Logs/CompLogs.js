import axios from 'axios'
import React, { useState } from 'react'
import { config, url } from '../../config/API'
import Demo from './Demo'

const CompLogs = (props) => {
    const [path,setPath] = useState()
    const [data,setData] = useState()
    const [show,setShow] = useState(false)
    const [model,setModel] = useState("saved_model/best.pth")
  return (
    <div className='w-full mt-5'>
        <div className='w-full grid grid-cols-7 gap-5'>
            <input
                className='rounded text-black col-span-4 text-center'
                placeholder={'Input Your Log path '+props.index}
                value={path}
                onChange={(e)=>setPath(e.target.value)}
            />
            <button
            className='col-span-2 bg-gray-600 text-white rounded'
            onClick={()=>{
                axios.get(`${url}/img/list/${path}`,config)
                .then((res)=>{
                    // console.log(res.data)
                    setData(res.data.data)
                })
                .catch((err)=>{
                    alert(err.response.data)
                })
            }}
            >
                Get File Log
            </button>
            <button className='bg-gray-500 rounded text-white'
            onClick={()=>setShow(!show)}
            >
                show
            </button>
        </div>
        <div className='w-full pt-5'>
            <input
            className='text-center w-10/12 rounded'
            value={model}
            placeholder='Input Path Model'
            onChange={(e)=>setModel(e.target.value)}
            />
        </div>
        {data && show &&<div className='grid grid-cols-3 gap-2 mt-5'>
            {data.map((data,index)=>(
                <div key={index} className='cursor-pointer'>
                    <img src={url+"/img/plat/"+path+"/"+data}/>
                    <Demo model={model} img={path+"/"+data}/>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default CompLogs