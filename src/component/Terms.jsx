import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class Terms extends Component {
  constructor() {
    super();
    this.state = {
      terms: "...",
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Information).then((result) => {
      this.setState({
        terms: result[0]["terms"],
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
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <h1 className="serviceName">Trems And Condition</h1>
                <hr />
                <p className="serviceDescription">{this.state.terms}</p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Terms;
