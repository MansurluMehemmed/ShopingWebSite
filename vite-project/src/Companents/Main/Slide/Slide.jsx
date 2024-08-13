import React from 'react'
import './Slide.css'
export const Slide = () => {
  return (
    <div
    id="carouselExampleInterval"
    className="carousel"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://themewagon.github.io/coloshop/images/slider_1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h6>SPRING / SUMMER COLLECTION 2024</h6>
        <h1>Get up to 30% Off New Arrivals</h1>
        <button className='show-button' type='button'>Show Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/image-photo/portrait-handsome-businessman-urban-setting-260nw-445628656.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h6>SPRING / SUMMER COLLECTION 2024</h6>
        <h1>Get up to 30% Off New Arrivals</h1>
        <button className='show-button' type='button'>Show Now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/023/308/746/small_2x/different-stylish-female-accessories-on-color-background-closeup-generative-ai-photo.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h6>SPRING / SUMMER COLLECTION 2024</h6>
        <h1>Get up to 30% Off New Arrivals</h1>
        <button className='show-button' type='button'>Show Now</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    
  </button>
</div>
  </div>
  </div>
  )
}
