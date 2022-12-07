import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';

export function TaskDShow(){

    const dispatch = useDispatch();
    const number = useSelector((state)=>state);

    useEffect(()=>{
        console.log(number.count)
    },[])

    return(
        <>
            <h1>TaskDShow</h1>
            <h1>{number.count}</h1>
            <button onClick={()=>dispatch({type:"ADD_NUMBER"})}>足し算</button>
            <h1>{number.count}</h1>
            <button onClick={()=>dispatch({type:"MINUS_NUMBER"})}>引き算</button>
        </>
    )
}