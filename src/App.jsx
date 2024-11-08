import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipe from "./components/pages/Recipe";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  return (
    <div className="font-text overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
