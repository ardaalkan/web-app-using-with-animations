import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import LandingText from "./components/LandingText/LandingText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <InfinityScroll/>
      <LandingText />
    </div>
  );
}

export default App;
