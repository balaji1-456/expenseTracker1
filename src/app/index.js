import React from "react"
import  "./index.css"
import Header from "./components/header"

import Add from "./components/add-transaction"
import Transactions from './components/transactions/index';
import {GlobalProvider} from "./components/context/globalState"
const App=()=>{
    return(<GlobalProvider>
         <Header/>
        <Add/>
        <Transactions/>
    </GlobalProvider>

    )
}




export default App