import React, { useState } from 'react'
import { config, url } from '../config/API'
import axios from 'axios'

const Difference = (props) => {
    const [lastmodel,setLastModel] = useState("learn4_2.pth")
    const [newmodel,setNewModel] = useState("learn3.pth")
    const [data,setData] = useState()
    
  return (
    <div className='w-10/12 m-auto mt-10'>
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-span-7 grid grid-cols-2'>
                <div className='w-11/12 m-auto text-center'>
                    <input
                    className='w-8/12 rounded text-center m-auto h-10'
                    placeholder='Input Name New Model'
                    value={newmodel}
                    onChange={(e)=>setNewModel(e.target.value)}
                    />
                </div>
                <div className='w-11/12 m-auto text-center'>
                    <input
                    className='w-8/12 rounded text-center m-auto h-10'
                    placeholder='Input Name Last Model'
                    value={lastmodel}
                    onChange={(e)=>setLastModel(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <button
                onClick={()=>{
                    axios.post(`${url}/comparasion`,{
                        "newModel": newmodel,
                        "lastModel": lastmodel
                      },config)
                    .then((res)=>{
                        setData(res.data.data)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }}
                className='bg-gray-400 w-full rounded h-10 text-yellow-300 font-bold hover:bg-gray-500'
                >Get Difference</button>
            </div>
        </div>
        {data ? <div className='mt-10 text-yellow-300'>
            <div>
                <p className='text-2xl font-bold'>Difference Result from Model <strong className='text-red-500'>{lastmodel}</strong> and <strong className='text-blue-500'>{newmodel}</strong></p>
            </div>    
            <div className='w-full grid grid-cols-4'>
                {data.map((data,index)=>(
                    <div key={index}
                    className='text-center mt-10'
                    >
                        <img src={url+"/img/plat/true/"+data.name}
                        className='w-44 m-auto'
                        />
                        <div className='grid grid-cols-2 mt-2'>
                            <div className='text-red-500 rounded'>
                                <p>{data.lastModelPredict}</p>
                            </div>
                            <div className='text-blue-500'>
                                <p>{data.newModelPredict}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>:null}
    </div>
  )
}

export default Difference