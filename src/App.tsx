import React from "react";
import { Route } from "react-router-dom";
import Home from "./components";
import CssBaseLine from "@material-ui/core/CssBaseline";
import "./App.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseLine />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;
