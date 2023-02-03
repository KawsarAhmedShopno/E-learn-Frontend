import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "../pages/Homepage";
import Servicepage from "../pages/Servicepage";
import Contactpage from "../pages/Contactpage";
import Projectpage from "../pages/Projectpage";
import Portfolio from "../pages/Portfolio";
import Aboutpage from "../pages/Aboutpage";
import Coursepage from "../pages/Coursepage";

import Coursedespage from "../pages/Coursedespage";
import Projectdespage from "../pages/Projectdespage ";
import Refundpage from "../pages/Refundpage";
import Termspage from "../pages/Termspage";
import Privacypage from "../pages/Privacypage";
import NotFound from "../pages/NotFound";
import Company from "../component/Company";
import Companypage from "../pages/Companypage";
class Approuter extends Component {
  render() {
    return (
      <div>
        {" "}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/course" element={<Coursepage />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/coursedespage/:courseId" element={<Coursedespage />} />
          <Route
            path="/projectdespage/:projectId"
            element={<Projectdespage />}
          />
          <Route path="/refund" element={<Refundpage />} />
          <Route path="/terms" element={<Termspage />} />
          <Route path="/privacy" element={<Privacypage />} />
          <Route path="/company" element={<Companypage />} />
        </Routes>
      </div>
    );
  }
}

export default Approuter;
