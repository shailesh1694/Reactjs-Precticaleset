import React,{useContext} from 'react'
import ComC from './ComC'
import {Data} from './ComA'




export default function ComB() {


  const first =useContext(Data);
console.log(first[0].age)
  return (

    <div><ComC /></div>

    )


  }








