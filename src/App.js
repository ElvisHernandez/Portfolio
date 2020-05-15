import React from "react";
import { Home, About, Projects, Skills } from "./pages";
import ResponsiveDrawer from "./components/Nav/Nav";

function App() {
  return (
    <>
      <ResponsiveDrawer />
      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
