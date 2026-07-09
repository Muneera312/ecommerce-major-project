import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import { useState } from "react";
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <>
     
      <HeroBanner />

      <div className="container mt-4">
       
          <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />

      </div>
    
      <FeaturedProducts selectedCategory={selectedCategory} />
       <Footer />
    </>
  );
}

export default Home;
