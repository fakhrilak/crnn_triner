import { useNavigate } from 'react-router-dom'
import { navbarData } from './data'
import React from 'react'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 fixed">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">
              <img src="https://blogger.zilog.online/static/media/logo.436f1557.png"
              className='w-1/12'
              />
            </a>
          </div>

          <div className="flex">
            {navbarData.map((data,index)=>(
              <a 
              key={index}
              onClick={()=>navigate(data.path)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {data.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar