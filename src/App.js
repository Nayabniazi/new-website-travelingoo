import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Orlando from "./Pages/Orlando";
import Nashville from "./Pages/Nashville";
import LosAngeles from "./Pages/LosAngeles";
import Dollas from "./Pages/Dollas";
import About from "./Pages/About";
import SanDiego from "./Pages/SanDiego";
import SanJose from "./Pages/SanJose";
import Walnut from "./Pages/Walnut";
import Chicago from "./Pages/Chicago";
import Houston from "./Pages/Houston";
import Miami from "./Pages/Miami";
import Napavalley from "./Pages/Napavalley";
import Newyork from "./Pages/Newyork";
import Anto from "./Pages/Anto";
import Franchisco from "./Pages/Franchisco";
import Airport from "./Pages/Airport";
import Coprate from "./Pages/Coprate";
import Grouptravel from "./Pages/Grouptravel";
import Intercity from "./Pages/Intercity";
import Tour from "./Pages/Tour";
import Solution from "./Pages/Solution";
import Chaufur from "./Pages/Chaufur";
import Limo from "./Pages/Limo";
import Topdestination from "./Pages/Topdestination";
import TopRoutes from "./Pages/TopRoutes";
import Van from "./Pages/Van";
import Ski from "./Pages/Ski";
import Platform from "./Pages/Platform";
import Faqs from "./Pages/Faqs";
import Bookingcars from "./Pages/Bookingcars";
import ResetPassword from "./Pages/ResetPassword";
import OTPForm from "./Pages/OTPForm";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/About" element={<About />} />
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dollas" element={<Dollas />} />
        <Route path="/LosAngeles" element={<LosAngeles />} />
        <Route path="/Nashville" element={<Nashville />} />
        <Route path="/Orlando" element={<Orlando />} />
        <Route path="/SanDiego" element={<SanDiego />} />
        <Route path="/SanJose" element={<SanJose />} />
        <Route path="/Walnut" element={<Walnut />} />
        <Route path="/Chicago" element={<Chicago />} />
        <Route path="/Houston" element={<Houston />} />
        <Route path="/Miami" element={<Miami />} />
        <Route path="/Napavalley" element={<Napavalley />} />
        <Route path="/Newyork" element={<Newyork />} />
        <Route path="/Anto" element={<Anto />} />
        <Route path="/Franchisco" element={<Franchisco />} />
        <Route path="/Airport" element={<Airport />} />
        <Route path="/Coprate" element={<Coprate />} />
        <Route path="/Grouptravel" element={<Grouptravel />} />
        <Route path="/Intercity" element={<Intercity />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Chaufur" element={<Chaufur />} />
        <Route path="/Limo" element={<Limo />} />
        <Route path="/Topdestination" element={<Topdestination />} />
        <Route path="/TopRoutes" element={<TopRoutes />} />
        <Route path="Van" element={<Van />} />
        <Route path="Ski" element={<Ski />} />
        <Route path="Platform" element={<Platform />} />
        <Route path="Login" element={<Login />} />
        <Route path="Faqs" element={<Faqs />} />
        <Route path="Bookingcars" element={<Bookingcars />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="OTPForm" element={<OTPForm />} />
      </Routes>

    </>
  );
}

export default App;  // ✅ Ensure this line exists
