import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends Component {
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
                6522 Baltimore National Pike CatonsVille, Califonia USA{" "}
                <br></br>
                Email : Support@ele.com<br></br>
                Phone : 434343434<br></br>
              </p>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Information </h2>
              <a className="footerLink" href="/about">
                About Me{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" href="/company">
                Company Profile{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" href="/contact">
                Contact Us{" "}
              </a>{" "}
              <br></br>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Policy </h2>
              <a className="footerLink" href="/refund">
                Fefund Policy{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" href="/terms">
                Terms And Condition{" "}
              </a>{" "}
              <br></br>
              <a className="footerLink" href="/privacy">
                Privaci Policy{" "}
              </a>{" "}
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
