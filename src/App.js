import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <InfinityScroll/>
    </div>
  );
}

export default App;
