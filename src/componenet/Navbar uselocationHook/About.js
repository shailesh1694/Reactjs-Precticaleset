import React from 'react'
import { useLocation} from 'react-router-dom'

export default function About() {


  const location = useLocation();
  
 
console.warn(location);
  return (
      <>

    <h1>Hello{location.pathname.replace("/"," ")}</h1>
    <button className='btn btn-primary'>GoHome</button>
    </>
  )
}
