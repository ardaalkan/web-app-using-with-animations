import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import LandingText from "./components/LandingText/LandingText";
import Preloader from "./components/Preloader/Preloader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import DetailText from "./components/DetailText/DetailText";

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
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <LandingPage />
      <InfinityScroll />
      <LandingText />
      <DetailText/>
    </div>
  );
}

export default App;
