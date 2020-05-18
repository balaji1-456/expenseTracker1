export default (state,action)=>{
    switch(action.type){
        case "income":
            return {active:action.payload}
        default:
            return state;
    }
}