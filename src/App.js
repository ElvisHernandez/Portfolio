import React from 'react'
import { Nav } from './components'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Home, About, Projects } from './pages'

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
