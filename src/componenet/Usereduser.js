import React,{useReducer} from "react";
import { act } from "react-dom/test-utils";



//   if(action.type ==="incerement"){
//      return state + 1;
//   }
//   if(action.type ==="Decriment"){
//     return state - 1;
//  }
 // return state;

//  switch (action.type) {
//   case 'increment':
//     return state +1;
//   case 'decrement':    //switch case use as above
//     return state - 1;
//   default:
//     throw new Error();

  
 
// }
const initialvalue=0
const reducer=(state,action)=>{
  console.log(action.type)
  switch(action.type){
case "inc": return  state +1;  
case 'dic': return state -1; 
default:console.log("Error")
  }
  

}



export default function UserReduser() {

const [state, dispatch] = useReducer(reducer,initialvalue)

// console.log('state',state);
// console.log('dispatch',dispatch);
// console.log("reducer",reducer)
// console.log('initaiArg',initialArg)

  return (
    <div className="d-flex row mb-3">
      <div className="d-flex justify-content-center">
        <h1>{state}</h1>
        <button className="btn btn-primary mx-3" onClick={()=>{dispatch({type:"inc"})}} >Incriment</button>
        <button className="btn btn-dark" onClick={()=>{dispatch({type:"dic"})}} > Decriment</button>
      </div>
    </div>
  );
}
