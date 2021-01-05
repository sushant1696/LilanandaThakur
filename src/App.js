import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Management from './Management'
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <div>

            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto">
                <Nav.Link href="#Home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#About"><Link to="/About">About</Link></Nav.Link>
                <Nav.Link href="#Management"><Link to="/Management">Management</Link></Nav.Link>
                <Nav.Link href="#Contact"><Link to="/Contact">Contact</Link></Nav.Link>
                
              </Nav>

            </Navbar>
            <Switch>
           
              <Route path="/about">
                <About />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route path="/Management">
                <Management/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
              
              
            </Switch>
          </div>
        </Router>
        <br />

       

      </>
     
    </div>
  );
}

export default App;
