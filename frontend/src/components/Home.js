import React from "react";
import Countries from "./Countries";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
