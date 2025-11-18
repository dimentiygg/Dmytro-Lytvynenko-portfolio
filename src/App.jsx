import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
      <div className="fixed bottom-0 bg-linear-to-b from-white to-transparent pointer-events-none z-1 w-full h-[320px]"></div>
    </div>
  );
}

export default App;
