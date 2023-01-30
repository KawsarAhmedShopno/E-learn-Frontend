import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      student: "",
      course: "",
      review: "",
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.HomeTopSummary)
      .then((result) => {
        this.setState({
          student: result[0]["total_student"],
          course: result[0]["total_course"],
          review: result[0]["total_review"],
        });
      })
      .catch((error) => {
        return null;
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Col className="countSection">
                    <Row>
                      <Col>
                        <h1 className="countNumber">{this.state.student}</h1>
                        <h4 className="countTitle">Students Worldwide</h4>
                        <hr className="bg-white " />
                      </Col>
                      <Col>
                        <h1 className="countNumber">{this.state.course}</h1>
                        <h4 className="countTitle">Courses Published</h4>
                        <hr className="bg-white w-25" />
                      </Col>
                      <Col>
                        <h1 className="countNumber">{this.state.review}</h1>
                        <h4 className="countTitle">Student Reviews</h4>
                        <hr className="bg-white w-25" />
                      </Col>
                    </Row>
                  </Col>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What I Have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          Requirment Gathering{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          System Analysis{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          Coding Testing{" "}
                        </p>
                        <p className="cardSubTitle text-justify">
                          Implementation{" "}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
