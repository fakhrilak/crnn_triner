import React, { useState } from 'react'
import { url } from '../config/API'
import MyTerminal from '../components/MyTerminal/MyTerminal'

const Cmd = () => {
    const [api,setApi] = useState(url)

  return (
    <div className='w-11/12 m-auto mt-10'>
        <MyTerminal api={api}/>
    </div>
  )
}

export default Cmd