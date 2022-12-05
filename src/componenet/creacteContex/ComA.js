import React, { createContext } from 'react'
import ComB from './ComB'


 export const Data = createContext();



   export default function ComA() {
 const slogan = "jai Hind";
 
  return (
    <>
    <Data.Provider value={[{name:'shailesh',age:25}]}>
      <ComB />
    </Data.Provider>
    </>

 
 
  )
}
// export { Data };  
//here export with curly bracecy other wise not work

// /contex API or UseContex hook


//contex api = contex,provider,consumer include due to complex city of consumer use to createContext() hook 