import './App.css';
import React, { Components } from 'react';
import About from './About';
import Home from './Home';
import Management from './Management';
import GetData from "./GetData";
import Gallery from "./Gallery"
import Footer from "./Footer";
import Header from "./Header";
import Barjhar from "./Barjhar";
import PostMethod from "./PostMethod";
import MultipleFuctionCall from './MultipleFuctionCall';
import Users from './MyComponents/Users';
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
                <Nav.Link href="#Gallery"><Link to="/Gallery">Gallery</Link></Nav.Link>
                <Nav.Link href="#GetData"><Link to="/GetData">GetData</Link></Nav.Link>
                 <Nav.Link href="#PostMethod"><Link to="/PostMethod">PostMethod</Link></Nav.Link> 
                 <Nav.Link href="#MultipleFuctionCall"><Link to="/MultipleFuctionCall">MultipleFuctionCall</Link></Nav.Link> 
                 <Nav.Link href="#Users"><Link to="/Users">Users</Link></Nav.Link> 
                
                <NavDropdown title="AboutBarjhar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Barjhar</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
             
            </Navbar>
            
            <Switch>
           
            <Route path="/PostMethod" key="gg">
                <PostMethod/>
              </Route>
              <Route path="/Users" key="gg">
                <Users/>
              </Route>
              <Route path="/Gallery" key="gg">
                <Gallery />
              </Route>
              <Route path="/about" key="aa">
                <About />
              </Route>
              <Route path="/GetData" key="cc">
                <GetData />
              </Route>
              <Route path="/MultipleFuctionCall" key="cc">
                <MultipleFuctionCall />
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
      <Footer />
    </div>
  );
}

export default App;
