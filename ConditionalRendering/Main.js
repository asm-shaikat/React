import React,{useState} from 'react';
import Condition from './Condition';
const Main = () =>{
  const [know,setknow] = useState(false)
  return(
    <div>
      <h2>Known ? {know.toString()}</h2>
      <button onClick={()=>setknow(!know)}>Check</button>
      <Condition know={know}></Condition>
    </div>
  )

}
export default Main;