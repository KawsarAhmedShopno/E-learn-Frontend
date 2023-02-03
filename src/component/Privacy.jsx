import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "...",
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Information).then((result) => {
      this.setState({
        privacy: result[0]["privacy"],
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col lg={12} md={12} sm={12}>
                <h1 className="serviceName">Privacy And Policy</h1>
                <hr />
                <p className="serviceDescription">{this.state.privacy}</p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Privacy;
