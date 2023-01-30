import React, { Component, Fragment } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Refund from "../component/Refund";

class Refundpage extends Component {
  render() {
    return (
      <Fragment>
        <TopNav title="Refund Policy" />
        <PageTop pagetitle="Refund Policy" />
        <Refund />
        <Footer />
      </Fragment>
    );
  }
}

export default Refundpage;
