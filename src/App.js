import React from "react";
import FullName from "./Components/Profile/Fullname";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/profession";


function App() {
  
  return (
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Profile </h1>
    {}
      <FullName firstName="Mehdi" lastName="Bourgou">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="Mehdi Bourgou" Age="20" Gender="Male"   />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
    </body>
    
      

  );
}
export default App;