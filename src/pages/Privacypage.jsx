import React, { Component, Fragment } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Privacy from "../component/Privacy";

class Privacypage extends Component {
  render() {
    return (
      <div>
        <TopNav title="Details" />
        <PageTop pagetitle="Details" />
        <Privacy />
        <Footer />
      </div>
    );
  }
}

export default Privacypage;
