import clsx from "clsx";
import DotPattern from "./components/Dotpattern";
import Landing from "./sections/Landing";
// import FloatingNavbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main>
      {/* Dot Pattern as Background */}

      {/* <DotPattern
        glow={true}
        className={clsx(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      /> */}
      <Landing />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};
export default App;
