import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,

      des: "",
      url: "",
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.HomeTopVideo)
      .then((result) => {
        this.setState({
          des: result[0]["video_description"],
          url: result[0]["video_url"],
        });
      })
      .catch((error) => {
        return null;
      });
  }
  modalClose = () => this.setState({ show: false });
  modelOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR VIDEOS</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videText">
              <p className="serviceDescription text-justify">
                {this.state.des}
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="videoCard">
              <Button onClick={this.modalOpen}>Play</Button>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modelOpen}>
          <Modal.Body>
            <Player src={this.state.url}>
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
