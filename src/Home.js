import React, { useState} from 'react'
import Navbar from './Components/Navbar.js'
import Carousel from './Components/Carousel.js'
import Card from './Components/Card.js';
import Footer from './Components/Footer.js';
import Resume from './Components/Resume.js';
import About from './Components/About.js';
import Project from './Components/Project.js';
import ContactUs from './Components/ContactUs.js';



export default function Home() {
// function myFunction(){
//   const a=document.getElementById('cha');
//   if(window.innerWidth<490)
//   {
//     a.style.display='grid';
//   }
//   else
//     {
//       a.style.display='flex';
    
//     }
//   }
//   window.addEventListener("resize", myFunction);
const [pos, setClassList] = useState(["text1"]);
setInterval(() => {
  if(pos!=="text1")
  setClassList("text1");
  else
  setClassList("text2");
}, 5500);

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
      <div  className="container chan" >
      < Resume/>
        <ContactUs/>
        
      </div>
      
      
     <Footer/> 
     

    </div>
    
  )
}
