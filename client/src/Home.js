import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
