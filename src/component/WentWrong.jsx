import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import error from "../asset/image/error.svg";
class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col>
              <h1>Under Construction</h1>
              <img className="errorIcon" src={error} alt="" />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default WentWrong;
