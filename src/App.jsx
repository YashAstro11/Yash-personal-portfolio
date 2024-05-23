/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Yash Yadav",
  title: "Web Developer, C/C++ Programmer",
  email: "ya45242@gmail.com",
  gitHub: "https://github.com/YashAstro11",
  instagram: "instagram.com/_yash___26/",
  linkedIn: "https://www.linkedin.com/in/yash-yadav-145b912b8/",
  medium: "",
  twitter: "https://x.com/Yash03845733",
  youTube: "https://www.youtube.com/channel/UCWAI1GvX-oQeOBAXCAoTEXg",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
