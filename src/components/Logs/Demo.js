import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../../config/API'

const Demo = (props) => {
    const  [text,setText] = useState()
  return (
    <div onClick={()=>{
        axios.post(`${url}/demo`,{
            model : props.model,
            img : props.img
        })
        .then((res)=>{
            console.log(res.data)
            setText(res.data.data)
        })
        .catch((err)=>{
            alert(err.response.message)
        })
    }}>
        <p className='text-white'>Result : <a className='text-yellow-500'>{text}</a></p>
    </div>
  )
}

export default Demo