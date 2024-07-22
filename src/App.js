import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HomePage from './components/HomePage/HomePage'
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <main>
      <HeroSection />
      <HomePage />
      </main>
    </>
  );
}

export default App;
