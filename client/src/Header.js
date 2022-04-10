import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2 data-text">
               Mediqwik <br /> One life saving solution for all your needs.
              </h1>
              <p className="main-hero-para">
              We have seen many ambulances stuck in traffic and still not able to do something about it.
              According to a report from Times of India unfortunately about 30% of deaths are caused due to delayed ambulance.
              A life-saving app to make the ambulances reach there destination ASAP.
              </p>
             <div className="col-lg-12 col-md-12 button-prime">
               <button className=" col-lg-3 col-md-2 btn-special">Ambulance </button>
               <button className=" col-lg-3 col-md-2 btn-special">User </button>
             </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/header-image.png"
                alt="heroimg"
                className="img-fluid img-header"
              />
          
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
