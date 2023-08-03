import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import LandingText from "./components/LandingText/LandingText";
import Preloader from "./components/Preloader/Preloader";
import DetailText from "./components/DetailText/DetailText";
import Slider from "./components/SliderComponent/Slider";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2000);
    })();
  }, []);

  return (
    <Router>
      <div className="App">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        <LandingPage />
        <InfinityScroll />
        <LandingText />
        <DetailText />
        <Slider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
