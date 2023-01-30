import React, { Component } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";

import Contact from "../component/Contact";

export class Contactpage extends Component {
  render() {
    return (
      <div>
        <TopNav title="Contact" />
        <PageTop pagetitle="Contact" />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Contactpage;
