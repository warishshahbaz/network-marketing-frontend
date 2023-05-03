import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Layout from './components/Layout'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/About'
import Gallery from "./pages/Login";
import Career from './pages/Register'
// import Social from './components/Social'
import Jobs from './pages/jobs'

function App() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path="/" exact element={<Layout />}></Route>
          <Route path="/home" exact element={<Layout />} />
          <Route path="/conatctus" element={<ContactUs/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/register" element={<Career/>}  />
          <Route path="/login" element={<Gallery/>}  />
          {/* <Route path="/jobs" element={<Jobs/>}  /> */}
        </Routes>

       
      </BrowserRouter>
    </>
  );
}

export default App;
