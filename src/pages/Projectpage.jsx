import React, { Component } from "react";
import Project from "../component/Project";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
export class Projectpage extends Component {
  render() {
    return (
      <div>
        {" "}
        <TopNav title="prject " />
        <PageTop pagetitle="project" />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default Projectpage;
