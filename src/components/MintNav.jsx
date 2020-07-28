import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '.././webicon.png';

const MintNav = () => {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      {' '}
      Shawn Kohltfarber
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/skohltfarber/camera-api">Repo</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default MintNav
