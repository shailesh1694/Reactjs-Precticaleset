import React from 'react';
import ReuseComponent from './ReuseComponent';

export default function NestedArry() {

const user =[{name:"shailesh",email:'shailesh@test.com',address:[{HousNo:"7",city:"bhvnagar",country:"India"}]},
{name:"vishal",email:'vishal@test.com',address:[{HousNo:"17",city:"hyadrabad",country:"India"}]},
{name:"gaurav",email:'gaurav@test.com',address:[{HousNo:"8",city:"ahmedabad",country:"Us"}]},
{name:"ashish",email:'ashish@test.com',address:[{HousNo:"10",city:"rajkot",country:"India"}]}


]
const togglename=()=>{
    console.log('tooglecase');
    alert(user.name);
}



  return (
    <div>
        {/* NestedArry */}
        {/* <h1>NestedArry</h1> */}
        {/* <table style={{border:"1px solid blue",margin:"10px"}}>
            
                {
                    user.map((value,index)=>{
                        return <tbody style={{border:"1px solid blue"}} key={index}>
                            <tr><td> {index+1}</td>
                                <td style={{border:"1px solid blue"}}>{value.name}</td>
                                <td>{value.email}</td>
                                <td>
                                    <table>
                                     {value.address.map((item,i)=>{
                                            return <tbody style={{border:"1px solid green"}} key={i}>
                                                    <tr >
                                                    <td >{item.HousNo}</td>
                                                    <td >{item.city}</td>
                                                    <td>{item.country}</td>
                                                    </tr>
                                                    </tbody>



                                     })}
                                    </table>
                                </td>
                                </tr>
                                </tbody>
                    })
                }
            
        </table> */}
        {/* ReuseComponent */}
        <h1>ReuseComponent With React</h1>
        {
            user.map((item,i)=>
             <ReuseComponent  item={item} address={item.address.map((value)=>value.country)}key={i} togglename={togglename}/>
                    )
        }
    </div>
  )
}
