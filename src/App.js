import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </Router>
  );
}

export default App;
