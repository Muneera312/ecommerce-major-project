import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
     
      <HeroBanner />

      <div className="container mt-4">
       
           <Categories />

      </div>
    
      <FeaturedProducts />
       <Footer />
    </>
  );
}

export default Home;