import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loading from "../asset/image/loader.svg";

class Loading extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Container className="text-center">
            <Row>
              <Col>
                <img src={loading} />
              </Col>
            </Row>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Loading;
