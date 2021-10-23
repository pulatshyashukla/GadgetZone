import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar title="Gadget Zone" />
      <Navigation />
      <Slider />
      <Card />
      <Footer />
    </>
  );
}

export default App;
