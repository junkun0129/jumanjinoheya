import React from "react";
import { ComponentB } from "./ComponentB";
import { createContext } from "react";


export const GlobalValue = createContext()
 
export function ComponentA(){
    return(
        <>
        <GlobalValue.Provider value = {100}>
            <h1>conponentA</h1>
          <ComponentB></ComponentB>  
        </GlobalValue.Provider>
        </>
    )
}