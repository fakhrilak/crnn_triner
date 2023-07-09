import axios from 'axios';
import React from 'react'
import { ReactTerminal } from "react-terminal";
import { config, url } from '../../config/API';
const MyTerminal = () => {
    const commands = {
        whoami: "IAM ZILOG",
        ls: async(params) => {
            let mystr=""
            await axios.post(`${url}/mycmd`,{command:params},config)
            .then((res)=>{
                console.log(res.data.data)
                
                for(let i =0;i<res.data.data.length;i++){
                    mystr+=res.data.data[i]+"\n"
                }
                // return mystr
            })
            .catch((err)=>{
                return "Internal server error"
            })
            return mystr
        }
      };
  return (
    <ReactTerminal
      commands={commands}
      enableInput={true}
      showControlButtons={true}
      theme={"dark"}
    />
  )
}

export default MyTerminal