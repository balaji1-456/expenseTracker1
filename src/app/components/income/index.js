import React, { useEffect,useState,useContext } from "react"
import { Value,InputData } from "../../styled-components"
import { GlobalContext } from './../context/globalState';
const Income=()=>{

    const [data,setData]=useState([])
    const context=useContext(GlobalContext)
    const {id,isDeleted}=context.transactions
    const {setActive}=useContext(GlobalContext)
    useEffect(()=>{
        
        console.log(localStorage.getItem("details"),"incomepage")
        console.log(JSON.parse(localStorage.getItem("details")))
        
        if(JSON.parse(localStorage.getItem("details")) == null)
        {
            return null
        }
        else if(JSON.parse(localStorage.getItem("details").length>0)){
            
            let incomearray=JSON.parse(localStorage.getItem("details")).filter(i=>i.type==="income")
            console.log(incomearray,"incomearray")
            setData(incomearray)
      console.log(id,"to chech id")
        }
        else  return null
           
    },[id,isDeleted])
    
   
  const deleteHandler=(item)=>{
   
    
      if(localStorage.getItem("details"))
      {
        let testing=data.filter(d=>d.id!==item.id)
    
        setData(testing)
        let detailsp=localStorage.getItem("details")
        console.log(detailsp,"from detailssp ")
    let details1=JSON.parse(localStorage.getItem("details"))
    console.log(details1,"from details1")
   let details2= details1.filter(i=>i.id!==item.id)
   console.log(details2,"from details2")
   
    localStorage.setItem("details",JSON.stringify(details2))
    
   console.log(localStorage.getItem("details"),"afterdeleting in incomepage")
     
      }
      setActive(item)
      item.isDeleted=true
      
      
     
     
     
      
      

  }
    return(<div>
          <Value style={{color:"orange",fontSize:"2em"}}>Income (+)</Value>
          <div>
              {data.map(item=> <div key={item.id} style={containerStyle}>
              
                <InputData>{item.description}</InputData>
                <InputData>${item.amount}</InputData>
                <InputData><button onClick={()=>deleteHandler(item)}><i className="fas fa-trash-alt" style={{color:"red",cursor:"pointer"}}></i>
               </button></InputData>
               
                
              </div>)}
           
         
              
          </div>
    </div>)
}
const containerStyle={
    display:"flex",
    justifyContent:"space-between",
    width:"300px",
    borderBottom:"1px solid gray",
    color:"white",
    '@media(minWidth: 320px)' : {
        width: '100%'
      },
      
      '@media(maxWidth: 800px)' : {
        width: '30%'
      },
      '@media(maxWidth: 1024px)' : {
        width: '100%'
      },
}
export default Income