import React from 'react';
import CardWidget from './CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">
                <img src="/img/Logo2.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
                <Nav.Link href="/">Contacto</Nav.Link>
            </Nav>
            <CardWidget/>
        </Container>
      </Navbar>     
    )
}

export default NavBar




