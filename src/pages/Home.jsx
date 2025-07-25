import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mx-2 min-h-screen bg-[url('/white-bg.jpg')] bg-cover bg-center  opacity-90">
      <div className="text-center mt-2 font-montserrat">
        <h1 className="text-3xl font-semibold text-black ">MF-Technology</h1>
        <p className="text-xl font-semibold text-black ">South-West Zone</p>
      </div>

      <Banner />
      <MainSection />

      <Footer />

      <Outlet />
    </div>
  );
};

export default Home;
