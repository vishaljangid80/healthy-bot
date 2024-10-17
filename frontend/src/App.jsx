import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Hero from "./pages/Hero";
import Yoga from "./pages/Yoga.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/yoga" element={<Yoga />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
