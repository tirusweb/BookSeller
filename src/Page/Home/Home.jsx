import React, { useEffect, useState } from "react";
import c1 from "../../image/course6.webp";
import c2 from "../../image/course5.webp";
import c3 from "../../image/course3.webp";
import c4 from "../../image/course4.webp";
import c5 from "../../image/sourse7.webp";
import banner1 from "../../image/banner1.webp"
import banner2 from "../../image/banner2.webp"
import { Link } from "react-router-dom";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Total number of slides
  
    const changeSlide = (direction) => {
      setCurrentSlide((prev) => {
        const newIndex = prev + direction;
        if (newIndex < 0) return totalSlides - 1; // Go to last slide
        if (newIndex >= totalSlides) return 0; // Go to first slide
        return newIndex; 
      });
    };
    
    const goToSlide = (index) => {
      setCurrentSlide(index); 
    };
  
    // Effect to auto change slide every 2 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        changeSlide(1); // Move to the next slide
      }, 2000); // 2000 milliseconds = 2 seconds
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []); 
  return (
    <div className="">
      <div className="">
        <div className=" mx-14 my-8">
          <div className="">
            <div className=" grid grid-cols-5 grid-rows-2 gap-2 ">
              <div className="col-span-3 row-span-2  z-10 shadow-xl">
                <div className="relative w-full" id="carouselExampleIndicators">
                  <div className="relative overflow-hidden">
                    <div
                      className="flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`, 
                      }}
                    >
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c1} className="block w-full" alt="Course 1" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c2} className="block w-full" alt="Course 2" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c3} className="block w-full" alt="Course 3" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c4} className="block w-full" alt="Course 4" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c5} className="block w-full" alt="Course 5" />
                      </div>
                    </div>
                  </div>

                  <button
                    className="absolute flex items-center top-1/2 left-[-12px] z-10 p-2 w-8 h-8 bg-white cursor-pointer outline-none rounded-full"
                    onClick={() => changeSlide(-1)}
                  >
                    &#10094;
                  </button>

                  <button
                    className="absolute flex items-center top-1/2 right-[-12px] z-10 p-2 w-8 h-8 bg-white cursor-pointer outline-none rounded-full"
                    onClick={() => changeSlide(1)} 
                  >
                    &#10095;
                  </button>

                  <div className="flex justify-center absolute top-full left-[40%] mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${
                          currentSlide === index ? "bg-red-500" : "bg-gray-300"
                        }`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-1">
                <Link to = "">
                    <img  src={banner1} alt="banner1"/>
                </Link>
              </div>
              <div className="col-span-2 row-span-1">
                <Link to = "">
                    <img  src={banner2} alt="Banner2"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
