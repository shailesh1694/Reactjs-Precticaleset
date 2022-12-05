import React from 'react'


export default function ReuseComponent(props) {




    
  return (
  <div style={{padding:"10px",margin:"10px"}}>
        <span style={{padding:"10px",margin:"10px"}}>{props.item.name}</span>
        <span style={{padding:"10px",margin:"10px"}}>{props.item.email}</span>   
        <span style={{padding:"10px",margin:"10px"}}>{props.address}</span>
        < br>
        </br>

        <button onClick={props.togglename}>togglename</button>


    </div>
  )
}
