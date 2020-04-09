import React from 'react'
import { Nav } from './components'
import { Home, About, Projects } from './pages'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default App;
