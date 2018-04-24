import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Sevafund from "./SevaFund";
import Footer from "./Footer";

const Projects = () => <h2>Projects</h2>;
const ProjectNew = () => <h2>New Project</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Sevafund} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/project/new" component={ProjectNew} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
