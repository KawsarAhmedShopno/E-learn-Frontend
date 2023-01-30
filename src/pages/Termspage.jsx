import React, { Component, Fragment } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Terms from "../component/Terms";

class Termspage extends Component {
  render() {
    return (
      <Fragment>
        <TopNav title="Terms And Condition " />
        <PageTop pagetitle="Terms And Condition " />
        <Terms />
        <Footer />
      </Fragment>
    );
  }
}

export default Termspage;
