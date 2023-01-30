import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Loading from "./Loading";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";

class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      loaderClass: "text-center",
      mainDivClass: "d-none",
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.HomeTopTitle)
      .then((result) => {
        this.setState({
          title: result[0]["home_title"],
          subtitle: result[0]["home_subtitle"],
          loaderClass: "d-none",
          mainDivClass: "text-center",
        });
      })
      .catch((error) => {
        return null;
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <Col className={this.state.loaderClass}>
                    <Loading />
                  </Col>
                  <h1 className="topTitle">{this.state.title}</h1>
                  <h4 className="topSubTitle">{this.state.subtitle}</h4>
                  <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
