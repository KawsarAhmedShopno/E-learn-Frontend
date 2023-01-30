import React, { Component, Fragment } from "react";
import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../asset/css/custom.css";
import "../asset/css/bootstrap.min.css";
import whiteLogo from "../asset/image/logo_white.png";
import blackLogo from "../asset/image/logo_black.png";
class TopNav extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      NavBarLogo: [whiteLogo],
      navBack: "navBackground",
      navItem: "navItem",
      navVariant: "dark",
      pageTitle: props.title,
    };
  }
  onScoll = () => {
    if (window.scrollY > 450) {
      this.setState({
        navBarTitle: "navTitleScoll",
        NavBarLogo: [blackLogo],
        navBack: "navBackgroundScroll",
        navItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 450) {
      this.setState({
        navBarTitle: "navTitle",
        NavBarLogo: [whiteLogo],
        navBack: "navBackground",
        navItem: "navItem",
        navVariant: "dark",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScoll);
  }
  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBack}
          expand="lg"
          fixed="top"
          variant={this.state.navVariant}
        >
          <Navbar.Brand href="/" className={this.state.navBarTitle}>
            <img src={this.state.NavBarLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown.Divider />
            </Nav>
            <Nav>
              <NavLink as={Link} to="/" className={this.state.navItem}>
                HOME
              </NavLink>
              <NavLink as={Link} to="/about" className={this.state.navItem}>
                About Me
              </NavLink>
              <NavLink as={Link} to="/service" className={this.state.navItem}>
                Services
              </NavLink>
              <NavLink as={Link} to="/course" className={this.state.navItem}>
                Course
              </NavLink>
              <NavLink as={Link} to="/project" className={this.state.navItem}>
                Project
              </NavLink>
              <NavLink as={Link} to="/portfolio" className={this.state.navItem}>
                Portfolio
              </NavLink>
              <NavLink as={Link} to="/contact" className={this.state.navItem}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNav;
