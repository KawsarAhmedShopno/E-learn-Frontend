import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import Loading from "./Loading";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
class Service extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Service)
      .then((result) => {
        this.setState({ myData: result, loading: false });
      })
      .catch((error) => {
        return null;
      });
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      const mylist = this.state.myData;
      const myView = mylist.map((mylist) => {
        return (
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img className="designIcon" src={mylist.service_logo} />
              <h2 className="serviceName">{mylist.service_name}</h2>
              <p className="serviceDescription">{mylist.service_description}</p>
            </div>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">My Service</h1>
            <div className="bottom"></div>
            <Row>{myView}</Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Service;
