import React,{useEffect,useRef} from 'react'

export default function User(props) {

const lastvalue= useRef();

useEffect(()=>{
    lastvalue.current= props.count;
});
        const PreviousProps= lastvalue.current;




  return (
    <div>
        <h4>Current Value :{props.count}</h4>
        <h4>Previous Value :{PreviousProps}</h4>

        
    </div>
  )
}
