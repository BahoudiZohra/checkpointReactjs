import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png'

function NavScrollExample() {
    return (
      <Navbar expand="lg" className="border-bottom">
        <Container fluid>
          <img src={logo} height={100} width={100}></img>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{marginLeft:'20em'}}>
            <Nav
              className="me-auto my-5 my-lg-2"
              style={{ maxHeight: '100px', fontSize:'18px' }}
              navbarScroll
            >
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#about" style={{paddingLeft:'30px'}}>About</Nav.Link>
              <Nav.Link href="#project" style={{paddingLeft:'30px'}}>Project</Nav.Link>
              <Nav.Link href="#contact" style={{paddingLeft:'30px'}}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
}

export default NavScrollExample;
