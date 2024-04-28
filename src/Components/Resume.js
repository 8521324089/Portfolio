import React from 'react'
import ContactUs from './ContactUs'

export default function Resume() {
  return (
    <div className='main' style={{display:'flex',margin:10}}>
        <div className="card container" style={{width: 370,textAlign:'left'}} >
          <img style={{width: 350, height:250}} src="Screenshot (627).png" class="card-img-top" alt="..."/>
            <div className="card-body">
              <p class="card-text"><a href="Vivek kumar.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a></p>
              </div>
              </div>
              <div className='container' style={{width:350}}><ContactUs/></div>
    </div>
  )
}
