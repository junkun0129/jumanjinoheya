import { useEffect, useState } from "react";
import React from 'react'

import {HOC} from "./HOC/HOC"
import {Show} from "./HOC/Show"

const Increment = HOC(Show);

export function TaskC(){



    return(
        <>
            <Increment number = {2}></Increment>
            <Increment number = {20}></Increment>
            <Increment number = {200}></Increment>
        </>
    )
}