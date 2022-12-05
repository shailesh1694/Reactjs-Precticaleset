import React,{useState} from 'react'

export default function HocComponent() {
  return (
    <div>
        <h1>HocComponent</h1>

        <HOCred red={Counter}/>
        <HOCgreen green={Counter}/>
        <HOCblue blue={Counter}/>



        </div>






  )
}

function HOCred (props){
    return (
        <h2 style={{backgroundColor:"red", width:"200px",color:"white"}}><props.red/></h2>
    );
}
function HOCgreen (props){
    return (
        <h2 style={{backgroundColor:"green", width:"200px",color:"white"}}><props.green/></h2>
    );
}
function HOCblue (props){
    return (
        <h2 style={{backgroundColor:"blue", width:"200px",color:"white"}}><props.blue/></h2>
    );
}


function Counter(){
       const [counter, setCounter] = useState(0)
       return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{setCounter(counter+1)}}>Update</button>
        </div>
       );


}

