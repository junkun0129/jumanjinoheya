import { useEffect, useState } from "react";
import React from 'react'
import ReactDOM from 'react-dom/client'
export function TaskB(){

    const [store, setStore] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>response.json())
        .then((data)=>setStore(data));7
    },[])

    return(
        <>
            <ul>
                {store?store.map((one,i)=>{
                    return <li key = {i}>{one.title}</li>
                }):null}
            </ul>
        </>
    )
}