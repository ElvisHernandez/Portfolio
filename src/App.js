import React from 'react'
import Nav from './components/Nav'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Nav />
        <h1>Hello World!</h1>
        <h2>Testing Netlify continuos deployment</h2>
      </Router>
  );
}

export default App;
