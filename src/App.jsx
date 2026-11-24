import "./App.css";
import { BrowserRouter, Routes, Route }
  from "react-router-dom";

import Home from "./modules/home.jsx";
import About from "./modules/about.jsx";
import Project from "./modules/project.jsx";
import Contact from "./modules/contact.jsx";
import NotFound from "./modules/not found.jsx";
import Navbar from "./modules/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills"
          element={<Project skillsOnly />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;