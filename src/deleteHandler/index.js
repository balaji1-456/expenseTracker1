import React,{useContext,useState} from "react"
import { Value,InputData } from "../app/styled-components/index"
import { GlobalContext } from "../app/components/context/globalState";

const DeleteHandler=(props)=>{
    const {setActive}=useContext(GlobalContext)
    const [deldata,setDeldata]=useState([])
      
     const deleteHandler=(item)=>{
        
          let testing=deldata.filter(d=>d.id!==item.id)
          setDeldata(testing)
        
          if(localStorage.getItem("details"))
          {
              let detailsp=localStorage.getItem("details")
              console.log(detailsp,"from detailsp")
          let details1=JSON.parse(localStorage.getItem("details"))
          console.log(details1,"from details1")
         let details2= details1.filter(i=>i.id!==item.id)
         console.log(details2,"from details2")
         
          localStorage.setItem("details",JSON.stringify(details2))
          
         console.log(localStorage.getItem("details"),"getting after filtering")
          }
          setActive(item)
        }
    return(<div>
        
    </div>)
}
export default DeleteHandler