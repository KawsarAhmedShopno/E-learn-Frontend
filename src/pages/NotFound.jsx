import React, { Component, Fragment } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import WentWrong from "../component/WentWrong";

class NotFound extends Component {
  render() {
    return (
      <div>
        <TopNav title="Details" />
        <PageTop pagetitle="Details" />
        <WentWrong />
        <Footer />
      </div>
    );
  }
}

export default NotFound;
