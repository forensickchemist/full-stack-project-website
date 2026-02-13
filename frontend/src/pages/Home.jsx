import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Product_List from "../components/Product_List";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product_List />
    </div>
  );
};

export default Home;
