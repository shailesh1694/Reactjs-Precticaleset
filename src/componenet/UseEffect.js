import React, { useEffect, useState } from "react";






const UseEffect = () => {



  const fetchdata= async()=>{

    
      // fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{return response.json()}).then((data)=>{console.log(data); setData(data);});}
      let data =  await fetch("https://jsonplaceholder.typicode.com/users");   
            console.log(data)
      let newdata= await data.json();
        console.log(newdata);
      setData(newdata);}
    
   
    



  const[Data,setData]=useState([]);

useEffect(()=>{
  fetchdata()
}, [] 
);





  return (
    <>
    <div className="container my-5">
      <div className="card mb-3" style={{maxWidth:"540px"}}>
    
    
      {
            Data.map((element)=>{
                      return ( 
                        <div className="container" key={element.id}>
                        <div className="row g-0">
                        
                        <div className="col-md-4">
                          <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">
                              {element.catchPhrase}
                            </p>
                            <p className="card-text">
                              <small className="text-muted">{element.email}</small>
                            </p>
                          </div>
                        </div>
                        </div>
                        </div>);
                     


            })
      }
      
      
      </div>
      </div>
    </>
  );

 
};

export default UseEffect;
