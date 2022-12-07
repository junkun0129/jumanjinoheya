import React from "react";
import { useState } from "react";

export const HOC = Component =>{
    const newComponent = ({number, ...props})=>{

        const [total, setTotal] = useState(0);

        return (
            <>
                <button onClick={()=>setTotal((old)=>old+number)}>increment by {number}</button>
                <Component {...props} total = {total}></Component>
            </>
        )
    }

    return newComponent;
}