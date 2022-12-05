import React,{forwardRef} from 'react'

 function Forwardref(props,ref) {





  return (
    <>
    <h1>Forwardref</h1>
    <form>
    <input type="tex"  ref={ref} autoComplete="disable" placeholder='see counter update by parent components'/>
    </form>
    </>
  )
}


export default forwardRef(Forwardref);