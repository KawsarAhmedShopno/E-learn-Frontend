import React, { Component, Fragment } from "react";
import About from "../component/About";
import Analysis from "../component/Analysis";
import Course from "../component/Course";
import Project from "../component/Project";
import Service from "../component/Service";
import Summary from "../component/Summary";
import TopBanner from "../component/TopBanner";
import TopNav from "../component/TopNav";
import Video from "../component/Video";
import Footer from "../component/Footer";
import Welcome from "../component/Welcome";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <TopNav />
        <TopBanner />
        <Welcome />
        <Service />
        <Analysis />
        <Summary />
        <Project />
        <Course />
        <Video />
        <About />
        <Footer />
      </Fragment>
    );
  }
}

export default Homepage;
