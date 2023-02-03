import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: "...",
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Information).then((result) => {
      this.setState({
        refund: result[0]["refund"],
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <div>
          <Fragment>
            <Container className="mt-5">
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <h1 className="serviceName">Data Protection Principles</h1>
                  <hr />
                  <p className="serviceDescription">{this.state.refund}</p>
                </Col>
              </Row>
            </Container>
          </Fragment>
        </div>
      );
    }
  }
}
export default Refund;
