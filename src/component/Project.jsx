import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import RestClint from "../restapi/RestClint";
import { Link } from "react-router-dom";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class Project extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Project)
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
            <Card className="projectCard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={mylist.img_one} />
              <Card.Body>
                <Card.Title className="serviceName">
                  {mylist.project_name}
                </Card.Title>
                <Card.Text className="serviceDescription">
                  {mylist.project_description}
                </Card.Text>
                <NavLink
                  as={Link}
                  to={"/projectdespage/" + mylist.id}
                  className={this.state.navItem}
                >
                  visit
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>
            <Row>{myView}</Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Project;
