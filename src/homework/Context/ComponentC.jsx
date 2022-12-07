import React from "react";
import { useContext } from "react";
import { GlobalValue } from "./ComponentA";
 
export function ComponentC(){

    const value  = useContext(GlobalValue)
    return(
        <>
            <dev style = {{color:"blue"}}>

            <h1>componentC</h1>
            <h1>{value}</h1>
            </dev>
        </>
    )
}