import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Header.jsx";
import "./SectionOne.jsx"


export default function Footer() {
  return (
    <>
        <div className="d-flex flex-wrap justify-content-evenly forFooter">
            <div className="ForFooterDiv">
                <h2 className="forfont">Contact Us</h2> <br/>
                <h5 className="forfont forFootSpace"><i class="fa-solid fa-location-arrow"></i> Location</h5> 
                <h6 className="forfont forFootSpace"><i class="fa-solid fa-phone"></i> Call +01 1234567890</h6>
                <h6 className="forfont forFootSpace"><i class="fa-regular fa-envelope"></i> demo@gmail.com</h6>
            </div>
            <div className="ForFooterDiv">
                <h2 className="forfont forfotth2">Feane</h2> <br/>
                <h6 className="forfont">Necessary, making this the first true generator <br/>
                on the Internet. It uses a dictionary of over 200<br/>Latin words, combined with.</h6>
                <div className="forfont d-flex">
                    <div><i class="fa-brands fa-facebook forSymbols forfottsym"></i></div>
                    <div><i class="fa-brands fa-twitter forSymbols"></i></div>
                    <div><i class="fa-brands fa-linkedin-in forSymbols"></i></div>
                    <div><i class="fa-brands fa-instagram forSymbols"></i></div>
                    <div><i class="fa-brands fa-pinterest forSymbols"></i></div>
                    <br/><br/><br/>
                </div>
                <p className="forfont"><i class="fa-regular fa-copyright"></i>2024 All Rights Reserved By Feane Restorunt</p> <br/>  
                <p className="forfont forFotSpacing"><i class="fa-regular fa-copyright"></i>Distributed By Feane</p>
                <br/><br/>
            </div>
            <div className="ForFooterDiv">
                <h2 className="forfont">Opening Hours</h2> <br/>
                <h5 className="forfont">EveryDay</h5> <br/>
                <h5 className="forfont">10:00 AM to 10:00 PM</h5>
            </div>
        </div>
    </>
  )
}
