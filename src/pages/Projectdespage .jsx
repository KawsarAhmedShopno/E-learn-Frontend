import React, { Component } from "react";
import ProjectDetails from "../component/ProjectDetails";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
class Projectdespage extends Component {
  render() {
    return (
      <div>
        {" "}
        <TopNav title="Project details" />
        <PageTop pagetitle="Project-details" />
        <ProjectDetails />
        <Footer />
      </div>
    );
  }
}

export default Projectdespage;
