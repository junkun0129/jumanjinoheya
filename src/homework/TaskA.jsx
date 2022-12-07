import { useEffect, useState } from "react";
import React from 'react'
import ReactDOM from 'react-dom/client'
export function TaskA(){
    const [input , setInput] = useState("");
  const [list, setList] = useState(null);
  const iwatani = 0;
  

  useEffect(()=>{
    console.log(input)
  },[input])

  const addList = (e)=>{
    e.preventDefault();

    if(input !== ""){

      
      if(list){
        setList((old)=>{
          return[
            ...old,
            input
          ]
        })
      }else{
        setList((old)=>{
          return[
            input
          ]
        })
      }
      
    }
    setInput("");
    console.log(e.target)

  }

  return (
  <>
    <form onClick={(e)=>addList(e)}>
      <input onChange={(e)=>setInput(e.target.value) } value = {input}></input>
      <button type = "submit">submit </button>
    </form>

    
    {list? list.map((one, i)=>{
      
      return <h1 key={i}>{one}</h1>
    }):null}
  </>
  )
}


["iwatani","iwatani"]
