import React,{useEffect,useState} from 'react'

function LifeCycle() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("shailesh")
    console.log("component did mount")
    
    // useEffect(() => {
    //     if(count==5){
    //             setname("vishal");
    //     }
      
    // console.log("useeffectcalled")
    //   return () => {
        
    //   }
    // },[count==5])
    

    useEffect(() => {
    
    
      return () => {
              }
    },)
    
    
  return (
    <>
    <h1>LifeCycle{count}{name}</h1>
    <button onClick={()=>{setcount(count+1)}}>click</button>
    </>
  )
}

export default LifeCycle;