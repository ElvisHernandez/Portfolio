import React from 'react'
import { Nav } from './components'
import { Home, About, Projects } from './pages'
import ResponsiveDrawer from './components/Nav/Nav'

function App() {
  return (
    <>
      {/* <Nav /> */}
      <ResponsiveDrawer />
 
      <main>
        <Home />
        {/* <Projects />
        <About /> */}
      </main>
    </>
  );
}

export default App;
