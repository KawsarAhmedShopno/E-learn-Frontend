import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectDetails from "../asset/image/pdetails.png";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";

class ProjectDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      projectId: props.id,
      projectName: "...",
      imgTwo: "...",
      projectDescription: "...",
      projectFeatures: "...",
      livePreview: "...",
    };
  }

  componentDidMount() {
    RestClint.GetRequest(AppUrl.Projectdes + this.state.projectId).then(
      (result) => {
        console.log("re:" + result);
        this.setState({
          projectName: result[0]["project_name"],
          imgTwo: result[0]["img_two"],
          projectDescription: result[0]["project_description"],
          projectFeatures: result[0]["project_features"],
          livePreview: result[0]["live_preview"],
        });
      }
    );
  }

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ProjectDetails</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="about-thumb-wrap after-shape">
                <img src={projectDetails} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="mt-5">
              <div className="project-details">
                <h1 className="projectDetailsText">{this.state.projectId}</h1>
                <p className="detailsName">fsd</p>

                <p className="cardSubTitle text-justify">fsdfsdf</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;
