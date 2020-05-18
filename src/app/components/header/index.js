import React,{useEffect,useState,useContext }from "react"
import { Title, Value, Button } from "../../styled-components"
import { GlobalContext } from './../context/globalState';


const Header=()=>{
    const [balance,setBalance]=useState({totalincome:0,totalexpense:0});
    
    const context=useContext(GlobalContext)
 
    const {id,isDeleted}=context.transactions
    console.log(context,"am from balacne")
  

    useEffect(()=>{
      
        const transactions=JSON.parse(localStorage.getItem("details"));
        console.log(transactions,"details")
      
        console.log(id,"from header")
        if(transactions==null)
        {
            return null
        }
       else if(transactions.length>0)
        {
            let incomearray=transactions.filter(item=>item.type==="income")
            console.log(incomearray,"incomearray")
            let incomeamount=incomearray.map((item)=>Number(item.amount)).reduce((a,b)=>a+b,0)
            console.log(incomeamount,"totalincome")
          
            let expenseearray=transactions.filter(item=>item.type==="expense")
            console.log(expenseearray,"expenseearray")
            let expenseamount=expenseearray.map((item)=>Number(item.amount)).reduce((a,b)=>a+b,0)
            
            console.log(expenseamount,"totalexpensee")
  
            setBalance({totalincome:incomeamount,totalexpense:expenseamount})
        }
        else if(transactions.length==null){
            //for calculating total income
        return null
        
          //for calculating total expenses
         
        
         
        }
        
       
    },[id,isDeleted])
    
    
    
    return(<div style={containerStyle}>

        <Title>Expense Tracker</Title>
    <Value>Available Balance : ${balance.totalincome-balance.totalexpense}</Value>
        <Button theme={{main:"green",border:"green"}}>Income</Button>
        <Value>+${balance.totalincome}</Value>

        <Button theme={{main:"red",border:"red"}}>Expenses</Button>
    <Value>${balance.totalexpense}</Value>
        

    </div>)
}

const containerStyle={
    background: "#0f0c29",  /* fallback for old browsers */
 /* Chrome 10-25, Safari 5.1-6" */

 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position:"absolute",
top:"0",
left:"0",
width:"100%",
height:"350px",
color:"white",
fontFamily:"sans-serif",
textAlign:'center',
":hover":{
 backgroundColor:"green",
 
 
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


}

export default Header