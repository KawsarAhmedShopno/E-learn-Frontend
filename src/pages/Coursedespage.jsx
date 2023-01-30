import React, { Component } from "react";
import CourseDetails from "../component/CourseDetails";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
class Coursedespage extends Component {
  render() {
    return (
      <div>
        {" "}
        <TopNav title="Course details" />
        <PageTop pagetitle="Course-details" />
        <CourseDetails />
        <Footer />
      </div>
    );
  }
}

export default Coursedespage;
