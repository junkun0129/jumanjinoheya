import React from "react";
import { ComponentC } from "./ComponentC";
import { ComponentD } from "./ComponentD";
 
export function ComponentB(){
    return(
        <>
            <h1>conponentB</h1>
          <ComponentC></ComponentC>  
          <ComponentD></ComponentD>
        </>
    )
}