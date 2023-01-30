import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
class Course extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    RestClint.GetRequest(AppUrl.Course)
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
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className="p-2">
                <img className="courseImg" src={mylist.small_img} />
              </Col>

              <Col lg={6} md={6} sm={12}>
                <h5 className="text-justify serviceName">
                  {mylist.short_title}{" "}
                </h5>
                <p className="text-justify serviceDescription">
                  {mylist.short_description}
                </p>
                <Link to={"/coursedespage/" + mylist.id}> View Detail</Link>
              </Col>
            </Row>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">MY COURSES</h1>
            <div className="bottom"></div>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <Row>{myView}</Row>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Course;
