import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import * as React from 'react'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
