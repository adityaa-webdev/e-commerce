import "./header.css";
import logo from "../components/logo.svg";
import cart from "../components/icon-cart.svg";
import avatar from '../components/image-avatar.png'
import Main from "./main";
import 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home"><img src={logo} id='logo' alt='logo'></img></Navbar.Brand>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Collections">Collections</Nav.Link>
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;