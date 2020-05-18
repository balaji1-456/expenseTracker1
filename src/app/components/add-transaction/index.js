import React, { useState,useContext} from "react"
import { Button } from "../../styled-components"
import uuid from "react-uuid"

import { GlobalContext } from './../context/globalState';

const Add=()=>{
    const [description,setDescription]=useState("")
    const [amount,setAmount]=useState(0)
  
    const {setActive}=useContext(GlobalContext)
    
    const handleTransaction=(type)=>{

      if(!description) alert("description is required")
      else if(!amount) alert("amount is required")
      else {
         
         
          const newDetails={
              description,amount,type,id:uuid(),date:getCurrentTime(),isDeleted:false
          }
          
          if(localStorage.getItem("details"))
          {
              let details=JSON.parse(localStorage.getItem("details"))
              details=[...details,newDetails]
              localStorage.setItem("details",JSON.stringify(details))
              console.log(details)
             
          }

          else
          {
         
              localStorage.setItem("details",JSON.stringify([newDetails]))
              console.log(localStorage.getItem("details"),"initialdetails")
              
          }
         
          setActive(newDetails)
          
         
          
      }
      
     


 
        

    }
  
    return (<div style={containerStyle}>
       
        <input 
            type="text" 
            placeholder="Add description"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
         />

        <input 
            type="number" 
            placeholder="Value"
            onChange={(e)=>setAmount(e.target.value)}
            value={amount}
        />
            <Button 
                theme={{main:"blue"}}
                style={{width:"150px"}}
                onClick={()=>handleTransaction("income")}>
               
            Add Income
            </Button>
            <Button 
                theme={{main:"blue"}}
                style={{width:"150px"}}
                onClick={()=>handleTransaction("expense")}>
                 
            Add Expense
            </Button>

    </div>)
}

const containerStyle={
    position:"absolute",
    top:"21em",
    width:"1540px",
    display:"flex",
    justifyContent:"center",
    alignItems:"space-between",
    borderBottom:"2px solid gray",
    backgroundColor:"#f54269",
    left:"0"
    
}

const getCurrentTime=()=>{
    const instance=new Date()
    const date=instance.getDate()
    const month=instance.getMonth()
    const year=instance.getFullYear()
    const time=instance.getTime()
    return {
        date,month,year,time
    }
}


export default Add