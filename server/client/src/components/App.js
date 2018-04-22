import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

const Projects = () => <h2>Projects</h2>;
const ProjectNew = () => <h2>New Project</h2>;
const Sevafund = () => <h2>Sevafund</h2>;

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Sevafund} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/project/new" component={ProjectNew} />
        </div>
      </Router>
    </div>
  );
};

export default App;
