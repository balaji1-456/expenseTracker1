import React from "react"
import Expenses from "../expenses"
import Income from "../income"
const Transactions=()=>{
    return(<div style={containerStyle}>
            <Income/>
            <Expenses/>
    </div>)
}

const containerStyle={
    position:"absolute",
    top:"23.5em",
    backgroundColor:"green",
    display:"flex",
    width:"1540px",
    left:"0",
    textAlign:"center",
    justifyContent:"space-around",
    color:"white",
    background: "black",  /* fallback for old browsers */

boxSizing: "border-box",
borderBottom:"1px solid black"


  
  
    
}

export default Transactions