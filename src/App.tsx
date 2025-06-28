// App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Events from "./components/Events";
import BookTable from "./components/BookTable";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Specials />
      <Events />
      <BookTable />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <TopBar/>
    </>
  );
}

export default App;
