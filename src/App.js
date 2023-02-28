import React from "react";
import  './Style.css' 
import About from "./componets/About";
import Console from "./componets/Console";
import {Route,Routes,Link,useNavigate} from "react-router-dom";
function App() {
 let navigation=useNavigate()
return(
  <div className="app">
    <div style={{display:""}}>
    <h3 > <Link className="alignl" style={{color:"white",top:'-37px' }} to='/'>Homes</Link></h3>
    <h3 > <Link className="alignc" style={{color:"white",top:'-40px'}} to='/About'>about</Link></h3>
    <h3 > <Link className="alignr" style={{color:"white",top:'-27px'}} to='/Help'>Help</Link></h3>
    </div>
    <br></br>
    <br></br>
    <br></br>
   
  <div className="mainHeading">
    <h1>ToDo List</h1>
  </div>
  <div className="subHeading">
    <br />
    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    <br></br>
  </div>
  <Routes>
    <Route path="/" element={<Console/>} />
    <Route path="/About" element={<About/>} ></Route>
  </Routes>
  <br />
 <button  onClick={()=>navigation(-1)} >go back</button>
  </div>

);
}

 

export default App;
