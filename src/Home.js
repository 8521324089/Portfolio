import React, { useState} from 'react'
import Navbar from './Components/Navbar.js'
import Carousel from './Components/Carousel.js'
import Card from './Components/Card.js';
import Footer from './Components/Footer.js';
import Resume from './Components/Resume.js';
import About from './Components/About.js';
import Project from './Components/Project.js';




export default function Home() {
 
const [pos, setClassList] = useState(["text1"]);
setInterval(() => {
  if(pos!=="text1")
  setClassList("text1");
  else
  setClassList("text2");
}, 5000);

  return (
    
    <div style={{backgroundColor:'#E9F3F7'}} >
     <Navbar/>
      
     <div className="container1">
 <Carousel/>
     <div className="container2">
        <div className="row2">
            <span className={pos} id='ani'>VIVEK</span>
            {/* <span className="text2">GeeksforGeeks</span> */}
        </div>
    </div>
</div>
     
     
       <About/>
      <Card/>
      <Project/>
     <Resume/>
     <Footer/> 
      

    </div>
    
  )
}
