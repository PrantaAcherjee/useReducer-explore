import React, { useReducer } from 'react';
const countState={
    count:0,
    active:true,
    clicks:0
}
const countReducer=(state,action)=>{
    switch (action.type) {
        case 'INCREASE':
            return{
                ...state,
                count: state.count +1 
            }
            break;

        case 'DECREASE':
        return{
            ...state,
            count: state.count -1
        }
        break;

        default:
            return state;
            break;
    }
}
const Count = () => {
    const [state,dispatch]=useReducer(countReducer,countState)
    return (
        <div>
         <h1>Number is {state.count}</h1> 
         <button onClick={()=>dispatch({type:'INCREASE'})}>INCREASE</button>  
         <button onClick={()=>dispatch({type:'DECREASE'})}>DECREASE</button>
        </div>
    );
};

export default Count;