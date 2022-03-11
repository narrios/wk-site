import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../Images/waikiki-logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import Magazin from "../Pages/Magazin";
import About from "../Pages/About";

export default function Header() {
    return (
      <>
      <Router>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="xl"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/" className="mt-1" style={{marginRight: "50px"}}>
              <img
                src={logo}
                height="25"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav_links me-auto">
                <Nav.Link as={Link} to="/"> Home </Nav.Link>
                <Nav.Link as={Link} to="/store"> Magazin </Nav.Link>
                <Nav.Link as={Link} to="/about"> Despre </Nav.Link>
              </Nav>
              <Form className="d-flex">
              <Button
                  variant="outline-primary"
                  style={{ marginLeft: "5px" }}>Log in</Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5px" }}>Sign up</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/store" element={<Magazin/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
      </>
    )
}
