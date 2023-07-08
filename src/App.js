import React, { useState } from 'react';
import axios from "axios"
import { config } from './config/API';
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ImagePreview,setImagePreview] = useState(null)
  const [api,setApi] = useState("http://192.168.100.170:7001/api/v4")
  const [data,setData] = useState()
  const [correct,setCorrect] = useState()
  const [triger,setTriger] = useState(false)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file)
    setImagePreview(URL.createObjectURL(file))
  };

  return (
    <div className='bg-gray-900 h-screen'>
      <div className='w-11/12 m-auto text-center pt-5'>
          <input
          type='text'
          className='w-5/12 rounded text-black text-center h-10'
          placeholder='Please Insert Base URL'
          value={api}
          onChange={(e)=>setApi(e.target.value)}
          />
      </div>
      
      <div className='w-11/12 m-auto text-center text-white h-10 pt-10 grid grid-cols-2 gap-10'>
        <div>
          <input type="file" className=' bg-black' onChange={handleImageUpload} />
        </div>
        <div>
          <button className='bg-gray-500 w-44 rounded'
        onClick={()=>{
          const data = new FormData()
          data.append("file",selectedImage)
          console.log("harusnya pos")
          axios.post(api+"/crnn/recognize",data,{
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data',
          })
          .then((res)=>{
            setData(res.data)
            setCorrect(res.data.data)
            setTriger(false)
          })
          .catch((err)=>{
            console.log(err.response)
          })
        }}
        >Get Predict</button>
      </div>
        </div>
        
      <div className='w-11/12 m-auto grid grid-cols-2 gap-2 pt-16'>
        <div className=''>
          {ImagePreview && <img src={ImagePreview} className='rounded  w-full'/>}
        </div>
        {data &&
        <div className='text-white'>
          <p className='text-center'>PREDICTION</p>
          <p className='text-yellow-300 text-center text-3xl mt-5'>{data.data}</p>
          <img src={api+"/img/plat/"+data.name} className='w-5/12 m-auto'/>
          <p className='text-red-600 text-sm mt-5'>*jika value yang dihasilkan berbeda/salah maka benarkan pada kolom input ibawah</p>
          <p className='mt-5'>CORRECT</p>
          <div className='grid grid-cols-3 gap-4'>
            <input
              className='text-center text rounded text-black'
              placeholder='correct plate'
              value={correct}
              onChange={(e)=>{
                setCorrect(e.target.value)
                setTriger(true)
              }}
              />
            {triger&&<button className='bg-gray-700 rounded'
            onClick={()=>{
              const mydata = {
                name : data.name,
                correct : correct
              }
              axios.patch(api+"/crnn/correct",mydata,{headers:{
                'Accept': '*/*',
                'Content-Type': 'application/json'
              }})
              .then((res)=>{
                console.log(res.data)
                alert(res.data.command)
                setTriger(false)
              })
              .catch((err)=>{
                alert(err.response.data.message)
              })
            }}
            >
              Correct
            </button>}
          </div>
          
        </div>}
      </div>
      
    </div>
  );
};

export default App;
