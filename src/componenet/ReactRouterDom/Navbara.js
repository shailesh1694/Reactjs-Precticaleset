import React, { useEffect } from 'react'
import {Route,Routes,Link,Navigate, NavLink} from "react-router-dom";
import Home from './Home';
import About from './About';
// import Page404 from './Page404';
import User from './User';
import Filter from './Filter';
import Details from './NestedRoutin/Details';
import Profile from './NestedRoutin/Profile';
import Channel from './NestedRoutin/Channel';
import Other from './NestedRoutin/Other';
import ProtecteRouting from './ProtecteRouting';
import Login from './NestedRoutin/Login';

export default function Navbara() {

  
  
  return (
    <div>
        <NavLink to="/"  style={({isActive})=>{return {color:isActive?"red":"blue"}}}>Home</NavLink> <br></br>
        <NavLink  to="/about" style={({isActive})=>{return {color:isActive?"red":"blue"}}} state={{name:"shailesh",age:27}}>About</NavLink><br></br>
        {/* <NavLink to='/contact'  style={({isActive})=>{return {color:isActive?"red":"blue"}}}>Contact</NavLink><br></br>  this is only for redirect ruting understand   */}
        <NavLink to='/user' style={({isActive})=>{return {color:isActive?"red":"blue"}}}state={{name:"shailesh",age:27}}>User</NavLink><br></br>
        <NavLink to='/filter' style={({isActive})=>{return {color:isActive?"red":"blue"}}}>filter</NavLink><br/>
        <NavLink to='/Details' style={({isActive})=>{return {color:isActive?"red":"blue"}}}>Details</NavLink> <br />
        <NavLink to='/login' >Login</NavLink>






        <Routes>
          {/* <Route path='/' element={<Home/>} >Home</Route> */}
      {/* below home components for protected routing example */}
      <Route path='/' element={<ProtecteRouting Components={Home}/>} >Home</Route>
          <Route path ="/about" element={<About /> } >About</Route>
          {/* <Route path='/*' element={<Page404 />} />         */}
          <Route path='/*' element={<Navigate to="/" />} />  
          <Route path='/user' element={<User />}>        
          <Route path='/user/:name' element={<User />}></Route>  
          </Route>      
          <Route path='/filter' element={<Filter />}></Route>        
          {/* <Route path='/Details/' element={<Details />}> */}

            {/* below is show for protected routing purpose only  */}
            <Route path='/Details/' element={<ProtecteRouting Components={Details}/>} >
                <Route path='profile' element={<Profile />} />
                <Route path='other' element={<Other />} />
                <Route path='channel' element={<Channel />} />
            </Route>   



            
            <Route path='/login' element={<Login />} />         




        </Routes>
    </div>
  )
}


// rather user go to this page we redirect user to home page how done it ! it done by Navigate see above example 