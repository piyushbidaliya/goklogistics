import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {
  return (
    <div className="h-screen w-screen relative">
      <Carousel />
      <Card />
    </div>
  );
}

export default Home;
