import React from 'react'

export default function Project() {
  return (
    <div id='Project' >
      <h2 style={{marginLeft:60}}>Project</h2>
      <div className='container' style={{display:'flex',alignItems:'center'}} >
      

      <div className="card "  style={{width:350,display:'flex',margin:20, alignItems:'center'}}>
  <img src="a (1).png" className="card-img-top" alt="..."/>
  <div classNameName="card-body" style={{ padding:5,backgroundColor:'#E09392',height:210}}>
    <h5 className="card-title">Weather app</h5>
    <p className="card-text">A Java weather app fetches data from a weather API, parses JSON responses, and displays weather information through a GUI. It includes user input handling, error management, testing, and deployment for a comprehensive weather forecasting experience.</p>
    </div>
</div>

<div className="card"  style={{width:350,display:'flex',margin:20,alignItems:'center'}}>
  <img src="a (8).png" className="card-img-top" alt="..."/>
  <div classNameName="card-body" style={{ padding:5,backgroundColor:'#E09392',height:210}}>
    <h5 className="card-title">News app</h5>
    <p className="card-text">A React-based news app aggregates and displays real-time news articles from various sources. It leverages React components for user interface design, integrates with news APIs for data retrieval, and employs routing for seamless navigation.</p>
    </div>
</div>

<div className="card"  style={{width:350,display:'flex',margin:20,alignItems:'center',}}>
  <img src="a (3).png" className="card-img-top" alt="..."/>
  <div classNameName="card-body" style={{ padding:5,backgroundColor:'#E09392',height:210}}>
    <h5 className="card-title">Stock Predication System</h5>
    <p className="card-text">A Python-based stock prediction system utilizes machine learning algorithms to analyze historical stock data, identifying patterns and trends to forecast future price movements. It employs features like data preprocessing, model training, and evaluation to enhance prediction accuracy.</p>
    </div>
</div>
    </div>
    
    </div>
  )
}
