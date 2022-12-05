import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {


  const location = useLocation();
  console.log(location);
  return (<>
   <h1>Hello{location.pathname.replace("/"," ")}</h1>
   <button className='btn btn-primary'>GoNext</button>
   </>
  )
}
