import React from "react";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Welcome from "./Components/Welcome/Welcome";
import OurServices from "./Components/OurServices/OurServices";
import Stats from "./Components/Stats/Stats";
import Choose from "./Components/Choose/Choose";
import Logo from "./Components/Logo/Logo";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Welcome />
      <OurServices />
      <Stats />
      <Choose />
      <Logo />
      <News />
      <Footer />
    </div>
  );
};

export default App;
