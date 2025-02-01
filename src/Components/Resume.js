import React, { useState} from 'react'
import ContactUs from './ContactUs'

export default function Resume() {
  // function myFunction(){
  //   const b=document.getElementsByClassName('chang');
  //   if(window.innerWidth<490)
  //   {
  //     b.style.Width='200';
  //   }
  //   else
  //     {
  //       b.style.Width='300';
      
  //     }
  //   }
  //   window.addEventListener("resize", myFunction);
  return (
    <div className='container' id='gk gk1' style={{marginBottom:10}}>
      {/* <div className='container' style={{display:'flex',alignContent:'center'}} ><ContactUs/></div> */}
        <div className="card container" id='gk1'   >
          <img src="Screenshot (627).png"  class="card-img-top " alt="..."/>
            <div className="card-body">
              <p class="card-text" ><a href="VivekKumar__CV.pdf" className="button"><i className="fa fa-download "></i>Download Resume</a></p>
              </div>
              </div>
              
    </div>
  )
}
