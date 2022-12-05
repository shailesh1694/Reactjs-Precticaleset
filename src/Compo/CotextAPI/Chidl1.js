import React,{createContext,useState} from 'react'
import Child12 from './Child2'
import SuperChild from './SuperChild';

export const Context= createContext();
// console.log(context);

export default function Chidl1() {


  function getDay(day){
    console.log(day)
    setDay(day)
  }
const [color, setColor] = useState("red")
const [day,setDay]=useState({});



  return (
    <Context.Provider value={{appcolor:color,age:28,name:"shaileSh",getDay:getDay,Dummy:DummyCom}} >
      <div>
      <h1>Hello Chidl1</h1>
      <h4>{day.day}</h4>
      <h4>{day.date}</h4>
      <h4>{day.name}</h4>
      <Child12 />
      <SuperChild/>
      </div>
      </Context.Provider>
  )
}


const DummyCom =()=>{
  return(<h1>Hii I Am Dummycom </h1>);
}