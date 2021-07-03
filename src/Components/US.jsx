import React, { useState } from 'react'

export default function US() {
    const[setObj,setMessage]=useState({message:"",id:"1"})
const changeHandle=(e)=>{
  const x=e.target.value;
  setMessage({...setObj,message:x});
}
    return (
        <>
        <input type="text" value={setObj.message} onChange={changeHandle}></input>
        <p>{setObj.message}</p>
        </>
    )
}
