import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import HomeContent from "../components/HomeContent";
import { heroImagesSet1 } from "../assets/carousel_images.js";

function Home() {
  return (
    <div className="min-h-screen w-screen relative">
      <Hero images={heroImagesSet1}/>
      <Card />
      <HomeContent/>
    </div>
  );
}

export default Home;
