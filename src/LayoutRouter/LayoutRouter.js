import React from "react";
import Header from "../components/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Plans from "../components/pages/plans/plans";
import Courses from "../components/pages/Home/Courses/Courses";
import Footer from "../components/footer/footer";
import AboutUs from "../components/pages/About/About";
import Contact from "../components/pages/contactus/contactus";
import Community from "../components/pages/community/community";
import Suport from "../components/pages/support/support";

function LayouteRouter() {
  return (
    //Routing is created,Header and footer are common to all pages//

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Suport />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default LayouteRouter;
