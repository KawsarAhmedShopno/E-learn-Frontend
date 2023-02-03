import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";

import Loading from "./Loading";
class Company extends Component {
  constructor() {
    super();
    this.state = {
      company: "...",
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Information).then((result) => {
      this.setState({
        company: result[0]["company"],
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
                <h1 className="serviceName">Company profile</h1>
                <hr />
                <p className="serviceDescription">{this.state.company}</p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Company;
