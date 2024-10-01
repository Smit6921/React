import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function () {
  return (
    <>
        {/* NavBar Start */}
        <nav className="navbar navbar-expand-lg navbar-light bg-black fornav">
  <div className="container-fluid">
    <a className="navbar-brand forHeadtitle" href="#">
      Feane
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item fornavLi">
          <a className="nav-link fornavFont" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fornavFontWhite" href="#">
            MENU
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fornavFontWhite"
            href="#"
          >
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fornavFontWhite"
            href="#"
          >
            BOOK TABLE
          </a>
        </li>
      </ul>
      <div className="d-flex">
        <div className='ForHeadIcon'>
        <i class="fa-solid fa-user"></i>
        </div>
        <div className='ForHeadIcon'>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className='ForHeadIcon forsearch'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className="forheadBTN" type="submit">
          Order Online
        </button>
      </div>
    </div>
  </div>
</nav>

        {/* NavBar End */}

        {/* Carousel Start */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner bg-black">
    <div className="carousel-item active bg-black slideIMG">
      <h2 className='slideH2'>Fast Food Restaurant</h2> <br />
      <p className='slideP'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad <br />mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,<br />sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
      <br /><br />
      <button className="forheadBTN BTNSpacing">Order Now</button>
    </div>
    <div className="carousel-item bg-black slideIMG2">
    <h2 className='slideH22'>Fast Food Restaurant</h2> <br />
      <p className='slideP2'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
      <br /><br />
      <button className="forheadBTN BTNSpacing2">Order Now</button>
    </div>
    <div className="carousel-item bg-black slideIMG3">
    <h2 className='slideH23'>Fast Food Restaurant</h2> <br />
      <p className='slideP3'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad <br />mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,<br />sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
      <br /><br />
      <button className="forheadBTN BTNSpacing3">Order Now</button>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Carousel End */}
    </>
  )
}
