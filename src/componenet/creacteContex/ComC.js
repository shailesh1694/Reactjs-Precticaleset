import React, { useContext } from 'react'
import { Data } from './ComA'


export default function ComC() {


  const comc  = useContext(Data);

  console.log(comc) 


  return (
    <div>
      <h1>hello Comc {}</h1>
    </div>
  )
}
