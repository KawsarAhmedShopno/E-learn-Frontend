import React, { Component } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";

import Project from "../component/Project";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <TopNav title="Portfolio" />
        <PageTop pagetitle="Portfolio" />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
