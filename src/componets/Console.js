import React, { useState } from 'react'
import { db } from '../utils/Firebase'
function Console() {
    const [val,setval]=useState('')
    const [delet,setdelet]=useState([])
    const [valarray,setvalarray]=useState([])
  return (
    <div>
 <div className="input">
    <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} placeholder="🖊️ Add item..." />
    <i  onClick={()=>{setvalarray([...valarray,{text:val,id:Date.now(),status:false,confirms:true,deleted:false}])}}>add</i>
  </div>
  <div className="todos">
   
   {
    valarray.map((data)=>{
 if(data.confirms){
  return(
    <div className="todo">
 <div className="left">
   <p key={data.id}>{data.text}</p>
 </div>
 <div className="right">
   <i onClick={(e)=>{
setvalarray(
valarray.filter((obj)=>{
if(obj.id===data.id){
 obj.status=true
obj.confirms=false
}
return valarray
})   
)
   }} >confirm</i>
 </div>
</div>
 )
 }
 return null
    })    
   }
  </div>

  <h1>confirm table</h1>
  {
  
 valarray.map((data)=>{

       if(data.status){
         return(
          <div className="todo1">
              <div className="input">
    <input type="text" value={data.text}  placeholder="🖊️ Add item..." />
    <i onClick={()=>{
  setvalarray(
    valarray.filter((obj)=>{
      if(obj.id===data.id){
        obj.deleted=true
        obj.status=false
      }
     
    
      return valarray
  })   
  )
    }}>x</i>
  </div>
     </div>
       )
       }
       return null
      })    
   }





<h1>deleted table</h1>  
{
 valarray.map((data)=>{
  if(data.deleted){
    return(
      <div className="todo1">
          <div className="input1">
<input type="text" value={data.text}  placeholder="🖊️ Add item..." />

<i onClick={
  ()=>{
  setvalarray(
    valarray.filter((obj)=>{
     console.log(obj);
if(obj.id===data.id){
console.log(obj);
obj.confirms=true
obj.deleted=false
}
return valarray
    })
  )
  }
}>add</i>
</div>
 </div>
   )
  }
      })    
   }
   
    </div>
    
  )
  
}

export default Console