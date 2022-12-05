import React,{useMemo, useState} from 'react'

function EffectMemo() {

  const [render, setrender] = useState(0);
  const [name, setname] = useState('');

let norender = useMemo(()=>{
              return(<><h3>Only one time render {render}:{name}</h3>
              <h3> UseEffect Vs Usememo</h3></>);
              },[name])

  return (
    <div>
        <h1>UseEffect Vs Usememo</h1>
      <br></br>


        {norender}
        
        <h3>every time render  {render}</h3>
        <h3>Only one time render {}</h3>

<br></br>
<button onClick={()=>{setrender(render+1)}}>counte</button>
<button onClick={()=>{setname(!name? "shailesh":"")}}>Name</button>



    </div>
  )
}

export default EffectMemo;