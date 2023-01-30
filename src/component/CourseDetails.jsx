import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
class CourseDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      CourseId: props.id,
      LongTitle: "",
      LongDescription: "",
      TotalDuration: "",
      TotalLecture: "",
      TotalStudent: "",
      SkillAll: "",
      VideoUrl: "",
      SmallImg: "",
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Coursedes + this.state.CourseId).then(
      (result) => {
        this.setState({
          LongTitle: result[0]["long_title"],
          LongDescription: result[0]["long_description"],
          TotalDuration: result[0]["total_duration"],
          TotalLecture: result[0]["total_lecture"],
          TotalStudent: result[0]["total_student"],
          SkillAll: result[0]["skill_all"],
          VideoUrl: result[0]["video_url"],
          SmallImg: result[0]["small_img"],
        });
      }
    );
  }

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={8} md={6} sm={12}>
              <h1 className="coruseDetailsText"> {this.state.LongTitle} </h1>
              <img className="courseDetaisImg" src={this.state.SmallImg} />
              <br></br> <br></br>
              <p className="CoruseallDescription">
                {this.state.LongDescription}
              </p>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="widget_feature">
                <h4 class="widget-title text-center">Course Features</h4>
                <hr />
                <ul>
                  <li>
                    <span> Enrolled :</span> {this.state.TotalStudent} students
                  </li>

                  <li>
                    <span>Duration :</span> {this.state.TotalDuration} hours
                  </li>

                  <li>
                    {" "}
                    <span>Lectures :</span> {this.state.TotalLecture}
                  </li>

                  <li>
                    {" "}
                    <span>Categories:</span> Technology
                  </li>

                  <li>
                    {" "}
                    <span>Tags:</span> Android, JavaScript
                  </li>

                  <li>
                    {" "}
                    <span>Instructor:</span> Kazi Ariyan
                  </li>
                </ul>
                <div class="price-wrap text-center">
                  <h5>
                    Price:<span>$54.00</span>
                  </h5>
                  <Button variant="warning">ENROLL COURSE</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="widget_feature">
                <h1 className="coruseDetailsText"> Skill You Need </h1>
                <hr />
                <ul>
                  <li>Metus interdum metus</li>
                  <li> Ligula cur maecenas</li>

                  <li> Metus interdum metus</li>

                  <li>Ligula cur maecenass</li>

                  <li> Metus interdum metus</li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
