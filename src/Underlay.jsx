import React from "react";
import "./Underlay.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";

export const Underlay = ({ handleButtonClick }) => {
  
  return (
    <>
      <Navbar />
      <Hero handleButtonClick={handleButtonClick} />
    </>
  );
};