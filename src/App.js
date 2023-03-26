
import './App.css'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './projects/Projects'
import Contact from './pages/contact/Contact'
import Socials from './components/socials/Socials'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>       
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>          

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Socials />
    </Router>
  );
}

export default App;
