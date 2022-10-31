import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import '../styles_components/Nav-to-Footer.css';

/* This function contains my navigation bar */
function Menu() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
      <Container>

        {/* React logo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Brand name of webpage */}
        <Navbar.Brand href="#home">Motheo's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* Navigation links to references in the same document */}
            <Nav.Link href="#divMe">About Me</Nav.Link>
            <Nav.Link href="#divTech">Why SovTech</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
    
  );
}

/* Returns Intro function to Menu.js */
export default Menu;