import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { useEffect } from "react";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <Cursor></Cursor>
    </>
  );
};

export default App;
