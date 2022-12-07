import React from "react";
import { useContext } from "react";
import { GlobalValue } from "./ComponentA";
 
export function ComponentD(){
    const value = useContext(GlobalValue)
    return(
        <>
            <dev style = {{color:"red"}}>

            <h1>conponentD</h1>
            <h1>{value}</h1>
            </dev>
        </>
    )
}