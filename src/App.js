import './App.css';
import About from './About';
import Home from './Home';
import Management from './Management';
import Contact from "./Contact";
import Gallery from "./Gallery"
import Footer from "./Footer";
import Header from "./Header";
import Barjhar from "./Barjhar";
import PagolBaba from "./PagolBaba";
import Sushanta from "./Sushanta";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
        <Header />
        <Router>
          <div>

            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto">

                <Nav.Link href="#Home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#About"><Link to="/About">About</Link></Nav.Link>
                <Nav.Link href="#Management"><Link to="/Management">Management</Link></Nav.Link>
                <Nav.Link href="#Contact"><Link to="/Contact">Contact</Link></Nav.Link>
                <Nav.Link href="#Gallery"><Link to="/Gallery">Gallery</Link></Nav.Link>
                <NavDropdown title="AboutBarjhar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Barjhar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">PagolBaba</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.2">PagolBaba</NavDropdown.Item> */}
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
             <Sushanta/>
            </Navbar>
            
            <Switch>
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

              
              <PagolBaba/>
            </Switch>
          </div>
        </Router>

        <br />

      </>
      <Footer />
    </div>
  );
}

export default App;
