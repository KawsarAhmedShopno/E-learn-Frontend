import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import RestClint from "../restapi/RestClint";
import AppUrl from "../restapi/AppUrl";
import Loading from "./Loading";
class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      techdes: "",
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    RestClint.GetRequest(AppUrl.Chart)
      .then((result) => {
        this.setState({ data: result, loading: false });
      })
      .catch((error) => {
        return null;
      });
    RestClint.GetRequest(AppUrl.HomeTopTechDes)
      .then((result) => {
        this.setState({ techdes: result[0]["tech_description"] });
      })
      .catch((error) => {
        return null;
      });
  }
  render() {
    var blue = "#051b35";
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
            <div className="bottom"></div>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <h1>BarChart</h1>
                <Col
                  style={{ width: "100%", height: "300px" }}
                  lg={6}
                  md={12}
                  sm={12}
                >
                  <ResponsiveContainer>
                    <BarChart width={100} height={300} data={this.state.data}>
                      <XAxis dataKey="techonology" />
                      <Tooltip />
                      <Bar dataKey="percent" fill={blue}></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Col>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <p className="text-justify serviceDescription">
                  {this.state.techdes}
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
export default Analysis;
