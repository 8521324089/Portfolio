import React from 'react'
import ContactUs from './ContactUs'


export default function Navbar() {
    const handleClick = () => {
      window.scrollTo({top:0});
    };
    const handleClick1 = () => {
      window.scrollTo(0, document.getElementById('About').offsetTop);
    };
    const handleClick2 = () => {
      window.scrollTo(0, document.getElementById('Project').offsetTop);
    };
    const handleClick3 = () => {
      window.scrollTo(0, document.getElementById('Contact').offsetTop);
    };

  return (
            <nav className="navbar navbar-expand-lg  bg-body-tertiary" style={{padding:0}} >
    <div className="container-fluid border-subtle" style={{backgroundColor:"black"}}>
      <button className="navbar-brand" onClick={handleClick} style={{color:"white",backgroundColor:'black',border:0}}  to="/">Home</button>
      <button className="navbar-toggler" type="button" style={{padding:2}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="btn btn-secondary dropdown-toggle" style={{backgroundColor:'#6c757d17'}} ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <button className="nav-link " onClick={handleClick1} style={{color:"white"}} href="/About">About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handleClick2} style={{color:"white"}} href="/Project">Project</button>
          </li>
          <li className="nav-item">
          <button className="nav-link" onClick={handleClick3} style={{color:"white"}} href='/ContactUs' >Contact</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
    
  )
}
