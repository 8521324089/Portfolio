import React from 'react'

export default function Carousel() {
  return (
    
    <div id="carouselExampleAutoplaying" className="carousel slide container" data-bs-ride="carousel" >
    <div className="carousel-inner container">

      <div className="carousel-item active  " >
        <img src="development-with-abstract-background.jpg" className="d-block w-100 " style={{height:600}} alt=""/>
      </div>
      <div className="carousel-item  " >
        <img src="510162-computer-programming.jpg" className="d-block w-100 " style={{height:600}} alt="..."/>
      </div>
      <div className="carousel-item  " >
        <img src="photo-1605379399642-870262d3d051.jpeg" className="d-block w-100 " style={{height:600}} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div>
    
  )
}
