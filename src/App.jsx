import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";
  import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
