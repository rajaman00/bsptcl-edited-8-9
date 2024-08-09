import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/slider.css';
import sliderImg1 from '../public/images/sliderImg1.jpg';
import sliderImg2 from '../public/images/sliderImg2.jpg';
import sliderImg3 from '../public/images/sliderImg3.jpg';
import sliderImg4 from '../public/images/Digha New GIS.jpg';
import sliderImg5 from '../public/images/Tarapur GSS.jpg';
import sliderImg6 from '../public/images/Tehta control room.jpg';
import sliderImg7 from '../public/images/Top View of Imamganj.jpg';
import sliderImg8 from '../public/images/Switchyard at Bakhri GSS.jpg';
import sliderImg9 from '../public/images/Switchyard at Bhabhua.jpg';
import sliderImg10 from '../public/images/Switchyard at Manihari GSS.jpg';
import sliderImg11 from '../public/images/Switchyard at Manjhaul GSS.jpg';
import sliderImg12 from '../public/images/Switchyard at Simri Bakhtiyarpur.jpg';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slider'>
      <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg1}
              alt="Slide"
            />
            <div className="hover-text">Your hover text here</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg2}
              alt="Slide"
            />
            <div className="hover-text">Your hover text here</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg3}
              alt="Slide"
            />
            <div className="hover-text">Your hover text here</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg4}
              alt="Slide"
            />
            <div className="hover-text">Digha New GIS</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg5}
              alt="Slide"
            />
            <div className="hover-text">Tarapur GSS</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg6}
              alt="Slide"
            />
            <div className="hover-text">Tehta control room</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg7}
              alt="Slide"
            />
            <div className="hover-text">Top View of Imamganj</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg8}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Bakhri GSS</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg9}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Bhabhua</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg10}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Manihari GSS</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg11}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Manjhaul GSS</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg12}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Simri Bakhtiyarpur</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
