import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class AboutDescription extends Component {
  constructor() {
    super();
    this.state = {
      who: "...",
      mission: "...",
      vission: "...",
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Information).then((result) => {
      this.setState({
        who: result[0]["who"],
        mission: result[0]["mission"],
        vission: result[0]["vission"],
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
              <Col sm={12} lg={12} md={12}>
                <h1 className="serviceName">Who I Am </h1>
                <hr />
                <p className="serviceDescription">{this.state.who}</p>

                <br></br>
                <br></br>
                <h1 className="serviceName">Our Mission </h1>
                <hr />
                <p className="serviceDescription">{this.state.mission}</p>

                <br></br>
                <br></br>
                <h1 className="serviceName">Our Vision </h1>
                <hr />
                <p className="serviceDescription">{this.state.vission}</p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default AboutDescription;
