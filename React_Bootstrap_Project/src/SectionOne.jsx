import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Header.jsx";

export default function SectionOne() {
  return (
    <>
      {/* Section One Start */}
        <div className="d-flex flex-wrap SecOneMainDiv">
          <div className="SecOneOneDiv d-flex">
              <div className="ForSecOneImg">
                
              </div>
              <div>
                <h3 className="SecOneH3">Tasty Tuesdays</h3>
                <h1 className="Seconeh1">20% Off</h1> <br />
                <button className="SecOneBTn">Order Now <i class="fa-brands fa-opencart forCartSymbol"></i></button>
              </div>
          </div>
          <div className="SecOneOneDiv2 d-flex">
                <div className="ForSecOneImg forDiv2Img">
                
                </div>
                <div>
                  <h3 className="SecOneH3">Pizza Days</h3>
                  <h1 className="Seconeh1">15% Off</h1> <br />
                  <button className="SecOneBTn">Order Now <i class="fa-brands fa-opencart forCartSymbol"></i></button>
                </div>
          </div>
        </div>
      {/* Section One End */}


      {/* Section Two Start */}
        <h1 className="ForSecTwoHeading">Our Menu</h1>
      <div className="d-flex flex-wrap">
        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg1"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">Delicious Pizza</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$20</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg2"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">Delicious Burger</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$15</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>


        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg3"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">Delicious Pizza</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$17</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>


        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg4"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">Delicious Pasta</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$18</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>


        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg5"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">French Fries</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$10</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "20rem"}}>
          <div className="ForSecTwoBorder">
            <div className="card-img-top forSecImg6"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title forFont">Tasty Burger</h5>
            <p className="card-text forFont">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="d-flex flex-wrap justify-content-between">
              <div><p className="forFont">$14</p></div>
              <div><i class="fa-solid fa-cart-shopping forFont forcart"></i></div>
            </div>
          </div>
        </div>
      </div>
      <button className="ForSecTwoBtn">View More</button> <br/><br/><br/>

      {/* Section Two End */}
    </>
  )
}
