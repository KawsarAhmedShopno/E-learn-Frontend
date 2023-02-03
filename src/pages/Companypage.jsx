import React, { Component } from "react";
import PageTop from "../component/PageTop";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";

import Company from "../component/Company";

class Companypage extends Component {
  render() {
    return (
      <div>
        <TopNav title="Comapny" />
        <PageTop pagetitle="Company profile" />
        <Company />
        <Footer />
      </div>
    );
  }
}

export default Companypage;
