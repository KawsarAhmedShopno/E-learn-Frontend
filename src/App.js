import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../src/pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import AppRouter from "./router/Approuter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
