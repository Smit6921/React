import React from 'react';
import './App.css';
import SectionOne from './SectionOne';
import { useState, useEffect } from 'react';
import SectionTwo from './SectionTwo';

function App() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`transparent-header ${isScrolled ? "scrolled" : ""}`}>
        <div className='ForHeader'>
          <div>
            <img
            src={isScrolled ? "./media/logo1-en.svg" : "./media/Header Pic.svg"}
            alt="Header_Pic"
            className="ForHeaderMainPic"
            />
          </div>
          <div className='ForHeaderSide'>
              <ul className={`ForHeaderUL ${isScrolled ? "scrolled-font" : ""}`}>
                <li className='ForDestination forCurDest'>Destinations
                <ul className='DropdownMenu'>
                  <div className='forUnderLi'>
                    <div>
                        <li>| Asser</li> <br />
                        <li>| Jeddah</li> <br />
                        <li>| Taif</li><br />
                    </div>
                    <div className='forUnderLi2'>
                      <li>| Riyadh</li> <br /> 
                      <li>| AlUla</li> <br />
                      <li>| Al Baha</li> <br />
                    </div>
                    <div className='forViewLi'>
                      <li>View All</li> 
                    </div>
                  </div>
                  <img src="./media/Header Li Design.svg" alt="design" className='ForLiDesignImg'/>
                </ul>
                </li>
                <li className='ForToDo forCurToDo'>Things To Do 
                <ul className='Drop'>
                  <div className='UnderLi'>
                    <div>
                        <li>| Nature</li> <br />
                        <li>| Entertainment</li> <br />
                        <li>| Culture & History</li><br />
                    </div>
                    <div className='UnderLi2'>
                      <li>| Shopping</li> 
                    </div>
                    <div className='ViewLi'>
                      <li>View All</li> 
                    </div>
                  </div>
                  <img src="./media/Header Li Design.svg" alt="design" className='LiDesignImg'/>
                </ul>
                </li>
                <li className='ForTrip forCurTrip'>Plan Your Trip
                <ul className='DropTrip'>
                  <div className='UnderLi'>
                    <div>
                        <li>| About Saudi</li> <br />
                        <li>| Travel Guide</li> <br />
                        <li>| Get Around</li><br />
                    </div>
                    <div className='ViewLi1'>
                      <li>View All</li> 
                    </div>
                  </div>
                  <img src="./media/Header Li Design.svg" alt="design" className='LiDesignImg'/>
                </ul>
                </li>
                <li className='ForHOverursor'>Saudi Calender</li>
                <li className='ForHOverursor'>Saudi Map</li>
                <li className='ForSearchIcon ForHOverursor'><i class="fa-solid fa-magnifying-glass"></i></li>
                <li className='ForWorldIcon ForHOverursor'><i class="fa-solid fa-globe forWorldIcon"></i>EN</li>
                <li className='ForVIsa ForHOverursor'>Get Your Visa</li>
                <li>
                  <button className={`ForLogBTN ${isScrolled ? "scrolled-button" : ""}`}>Log In / Sign Up</button>
                </li>
              </ul>
          </div>
        </div>
      </header>

      <SectionOne/>
      <SectionTwo/>
    </>
  )
}

export default App
