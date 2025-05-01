import React, { useState, useEffect } from "react";
import "./App.css";

import image1 from "../media/SecOneImgOne.webp";
import image2 from "../media/SecOneImgTwo.webp";
import image3 from "../media/SecOneImgThree.webp";
import image4 from "../media/SecOneImgFour.webp";
import image5 from "../media/SecOneImgFive.webp";
import image6 from "../media/SecOneImgSix.webp";

import image7 from "../media/SecOneImgSeven.webp";
import image8 from "../media/SecOneImgEight.webp";
import image9 from "../media/SecOneImgNine.webp";
import image10 from "../media/SecOneImgTen.webp";
import image11 from "../media/SecOneImgEleven.webp";
import image12 from "../media/SecOneImgTwelve.webp";

export default function SectionOne() {
  
  const slides = [
    { image: image1, 
      title: "Jeddah Stopover", 
      price: "Starting from INR 23,358" 
    },
    { image: image2, 
      title: "Discover Jeddah", 
      price: "Starting from INR 23,173" 
    },
    { image: image3, 
      title: "Riyadh City break", 
      price: "Starting from INR 20,599" 
    },
    { image: image4, 
      title: "Jeddah City Package", 
      price: "Starting from INR 22,990" 
    },
    { image: image5, 
      title: "Jeddah Getaway", 
      price: "Starting from INR 24,990" 
    },
    { image: image6, 
      title: "Jeddah City Package", 
      price: "Starting from INR 25,591" 
    },
  ];

  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -800, // Adjust scroll amount
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 800, // Adjust scroll amount
      behavior: "smooth",
    });
  };





  const slides2 = [
    { image: image7, 
      title: "Ultimate Jeddah", 
      price: "Starting from INR 21,150" 
    },
    { image: image8, 
      title: "Taif - Journey through the Rose City", 
      price: "Starting from INR 25,097" 
    },
    { image: image9, 
      title: "Riyadh City Break", 
      price: "Starting from INR 24,990" 
    },
    { image: image10, 
      title: "Jeddah City Package", 
      price: "Starting from INR 27,200" 
    },
    { image: image11, 
      title: "Jeddah City Break", 
      price: "Starting from INR 27,200" 
    },
    { image: image12, 
      title: "Riyadh City Break", 
      price: "Starting from INR 22,399" 
    },
  ];

  const scrollContainer2 = React.useRef(null);

  const scrollLeft2 = () => {
    scrollContainer2.current.scrollBy({
      left: -800, // Adjust scroll amount
      behavior: "smooth",
    });
  };

  const scrollRight2 = () => {
    scrollContainer2.current.scrollBy({
      left: 800, // Adjust scroll amount
      behavior: "smooth",
    });
  };

  return (
    <div className="ForScOneBack">
      <video src="./media/india.mp4" autoPlay muted loop className="ForSecOneVideo"></video>
      <h1 className="SecOneH1">Spectacular Saudi</h1>

      <h1 className="ForSecondH1">Special Package Deals</h1>

      <div className="carousel-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>

        <div className="carousel" ref={scrollContainer}>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img className="carousel-image" src={slide.image} alt={slide.title} />
              <h3 className="carousel-title">{slide.title}</h3>
              <p className="carousel-price">{slide.price}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
        <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>   

          <br /><br /><br /><br />
      
      <div className="carousel-container">
        <button className="scroll-button left" onClick={scrollLeft2}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>

        <div className="carousel" ref={scrollContainer2}>
          {slides2.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <img className="carousel-image" src={slide.image} alt={slide.title} />
              <h3 className="carousel-title">{slide.title}</h3>
              <p className="carousel-price">{slide.price}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight2}>
        <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>

    </div>
  );
}

