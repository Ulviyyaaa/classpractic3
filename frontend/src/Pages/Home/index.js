import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomePageComponents from "../../Components/HomePageComponents";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <Navbar />
        <HomePageComponents />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default Home;
