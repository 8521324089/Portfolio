import React, { useState} from 'react'
import ContactUs from './ContactUs'

export default function Resume() {
  const [siz,setsiz]=useState(["310"])
window.onresize = function exampleFunction(){
  if(window.innerWidth<490)
  setsiz("250");
  else
    setsiz("310");
  }
  return (
    <div className='container' style={{marginBottom:10,width:siz}}>
      {/* <div className='container' style={{display:'flex',alignContent:'center'}} ><ContactUs/></div> */}
        <div className="card container"  style={{width:siz}}  >
          <img src="Screenshot (627).png"  class="card-img-top" alt="..."/>
            <div className="card-body">
              <p class="card-text" ><a href="Vivek kumar.pdf" className="button"><i className="fa fa-download "></i>Download Resume</a></p>
              </div>
              </div>
              
    </div>
  )
}
