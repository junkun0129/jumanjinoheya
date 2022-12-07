import React from "react";
import { useEffect } from "react";
import { TaskDShow } from "./Redux/TaskDShow";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";


export const reducer = (state = {count:0}, action)=>{

    switch(action.type){
      case "ADD_NUMBER":  
        return{
            count: state.count+=1
        }
  
      case "MINUS_NUMBER":
        return{
          count: state.count-=1
        }
        }

        return state;
  }
  
export const store = createStore(reducer, applyMiddleware(logger))
  
  

export function TaskD(){


    return (
        <>
            <Provider store={store}>
                <TaskDShow></TaskDShow>
            </Provider>
        </>
    )
}