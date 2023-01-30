import React, { Component } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Course from "../component/Course";

class Coursepage extends Component {
  render() {
    return (
      <div>
        <TopNav title="Course details" />
        <PageTop pagetitle="Course-details" />
        <Course />
        <Footer />
      </div>
    );
  }
}

export default Coursepage;
