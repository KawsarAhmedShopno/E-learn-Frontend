import React, { Component } from "react";
import AboutDescription from "../component/AboutDescription";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";

export class Aboutpage extends Component {
  render() {
    return (
      <div>
        <TopNav title="About Us" />
        <PageTop pagetitle="About Us" />
        <AboutDescription />
        <Footer />
      </div>
    );
  }
}

export default Aboutpage;
