import "./App.scss";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
