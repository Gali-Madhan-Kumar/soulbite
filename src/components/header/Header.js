import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import classes from "./Header.module.scss";

import React from "react";
import Home from "../home/Home";
import Soulbite from "../soulbite/Soulbite";
import Features from "../features/Features";
import Category from "../categories/Category";
import WhySoulbite from "../whysoulbite/WhySoulbite";
const Header = () => {
  return (
    <>
      <Navbar className={classes["header"]} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ustify-content-end nav" justify="true">
              <Nav.Link style={{ color: "rgb(255, 175, 0)" }} href="#home">
                HOME
              </Nav.Link>
              <Nav.Link
                style={{ color: "rgb(255, 175, 0)" }}
                href="#what_is_soulbite"
              >
                WHAT IS SOULBITE
              </Nav.Link>
              <Nav.Link style={{ color: "rgb(255, 175, 0)" }} href="#features">
                FEATURES
              </Nav.Link>
              <Nav.Link
                style={{ color: "rgb(255, 175, 0)" }}
                href="#why_soulbite"
              >
                WHY SOULBITE
              </Nav.Link>
              <Nav.Link
                style={{ color: "rgb(255, 175, 0)" }}
                href="#categories"
              >
                CATEGORIES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home">
        <Home />
      </div>
      <div id="what_is_soulbite">
        <Soulbite />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="categories">
        <Category />
      </div>
      <div id="why_soulbite">
        <WhySoulbite />
      </div>
    </>
  );
};

export default Header;
