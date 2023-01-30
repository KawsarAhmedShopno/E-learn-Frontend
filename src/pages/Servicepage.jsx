import React, { Component } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Service from "../component/Service";

class Servicepage extends Component {
  render() {
    return (
      <div>
        <TopNav title="Our services" />
        <PageTop pagetitle="Our services" />
        <Service />

        <Footer />
      </div>
    );
  }
}

export default Servicepage;
