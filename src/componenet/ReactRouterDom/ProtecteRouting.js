import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtecteRouting(props) {
    console.log(props);
    const{Components}=props;

 const navigate= useNavigate();

useEffect(()=>{
            let login = localStorage.getItem('login');
            if(!login){
                    navigate('/login');
            }
})

  return (
    <div>
        <Components />

    </div>
  )
}
