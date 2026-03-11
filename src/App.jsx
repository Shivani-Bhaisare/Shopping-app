import React from "react";
import Navbar from "./Components/Navbar";
import Landingpage from "./Components/Landingpage";
import Products from "./Components/Products";
import TopSellerProducts from "./Components/ProductScroll";
import OfferSection from "./Components/OfferSection";
import ProductCard from "./Components/ProductCard";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import Testimonial from "./Components/Testimonial";
import NewsBlog from "./Components/NewsBlog";
import Faq from "./Components/Faq";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router basename="/Shopping-app/">
      {/* Common Layout (Navbar + Footer sab pages me hoga) */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Landingpage />
              <Products />
              <TopSellerProducts />
              <OfferSection />
              <ProductCard />
              <Testimonial />
              <NewsBlog />
              <Faq />
              <Newsletter />
              <Footer/>
            </>
          }
        />

        {/* Men Page */}
        <Route path="/men" element={<MenCollection />} />

        {/* Women Page */}
        <Route path="/women" element={<WomenCollection />} />
      </Routes>

      
    </Router>
  );
};

export default App;