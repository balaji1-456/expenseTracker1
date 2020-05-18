import React,{createContext, useReducer} from "react"
import AppReducer from "./../app-reducer/index"

const activeTransaction = {
    active:{    
        description:"",
        amount:"",
        type:"",
        id:""
        }


}

export const GlobalContext=createContext(activeTransaction)

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,activeTransaction)

    //actions
     function setActive(id){
        dispatch({
            type:"income",
            payload:id
        })
    }
    
return (<GlobalContext.Provider value={{transactions:state.active,setActive}}>
       {children}
   </GlobalContext.Provider>)
}