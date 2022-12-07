import React from "react";
import { ComponentA } from "./Context/ComponentA";


export function TaskE(){


    return(
        <>
        <GlobalValue.Provider value = {100}>
            <ComponentA></ComponentA>
        </GlobalValue.Provider>
        </>
    )
}