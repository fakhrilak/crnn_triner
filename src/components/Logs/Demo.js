import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../../config/API'

const Demo = (props) => {
    const  [text,setText] = useState()
  return (
    <div onClick={()=>{
        axios.post(`${props.api}/demo`,{
            model : props.model,
            img : props.img
        })
        .then((res)=>{
            setText(res.data.data)
        })
        .catch((err)=>{
            // alert(err.response)
            console.log(err)
        })
    }}>
        <button className='text-white bg-gray-500 mt-2 rounded w-14'> Result </button><a className='text-yellow-500'> : {text}</a>
    </div>
  )
}

export default Demo