import './App.css';
import About from './About';
import Home from './Home';
import Management from './Management';
import Contact from "./Contact";
import Gallery from "./Gallery"
import Abc from "./Abc";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
     
      <>
      
        <Router>
          <div>

            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto">

                <Nav.Link href="#Home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#About"><Link to="/About">About</Link></Nav.Link>
                <Nav.Link href="#Management"><Link to="/Management">Management</Link></Nav.Link>
                <Nav.Link href="#Contact"><Link to="/Contact">Contact</Link></Nav.Link>
                <Nav.Link href="#Gallery"><Link to="/Gallery">Gallery</Link></Nav.Link>
                <Nav.Link href="#Abc"><Link to="/Abc">Abc</Link></Nav.Link>
                </Nav>

            </Navbar>
            <Switch>
            <Route path="/Abc" key="acc">
                <Abc />
              </Route>
            <Route path="/Gallery" key="gg">
                <Gallery />
              </Route>
              <Route path="/about" key="aa">
                <About />
              </Route>
              <Route path="/Contact" key="cc">
                <Contact />
              </Route>
              <Route path="/Management" key="mm">
                <Management />
              </Route>
              <Route path="/" key="hh">
                <Home />
              </Route>

              
              </Switch>
          </div>
        </Router>
        
        <br />

      </>
      <Footer/>
    </div>
  );
}

export default App;
