import React, { Component, Fragment } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      address: "...",
      email: "...",
      phone: "...",
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Footer).then((result) => {
      this.setState({
        address: result[0]["address"],
        email: result[0]["email"],
        phone: result[0]["phone"],
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg="3" md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us </h2>

              <div className="social-container">
                <a className="facebook social" href="#">
                  Facebook
                </a>
                <br />
                <a href="#" className="youtube social">
                  Youtube
                </a>
                <br />
                <a href="#" className="twitter social">
                  Twiter
                </a>
              </div>
            </Col>
            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Address </h2>
              <p className="footerDescription">
                {this.state.address}
                <br></br>
                Email : {this.state.email}
                <br></br>
                Phone : {this.state.phone}
                <br></br>
              </p>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Information </h2>
              <NavLink as={Link} to="/about" className="footerLink">
                About Me
              </NavLink>{" "}
              <br></br>
              <NavLink as={Link} to="/company" className="footerLink">
                Company Profile
              </NavLink>
              <br></br>
              <NavLink as={Link} to="/contact" className="footerLink">
                Contact Us
              </NavLink>
              <br></br>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Policy </h2>

              <NavLink className="footerLink" as={Link} to="/refund">
                Refund Policy
              </NavLink>
              <br></br>
              <NavLink as={Link} to="/terms" className="footerLink">
                Terms And Condition
              </NavLink>
              <br></br>
              <NavLink as={Link} to="/privacy" className="footerLink">
                Privaci Policy
              </NavLink>

              <br></br>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightlink" href="#">
            © Copyright 2016 by easy Learning, All Rights Reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
