import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <div className="min-h-screen w-screen relative">
      <Hero />
      <Card />
      <HomeContent/>
    </div>
  );
}

export default Home;
