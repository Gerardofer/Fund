import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a style={{ color: "black" }} href="/auth/google">
              Login with Google
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a style={{ color: "black" }} href="/api/logout">
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper grey lighten-4">
            <Link
              to={this.props.auth ? "/projects" : "/"}
              className="left brand-logo"
              style={{ color: "black" }}
            >
              SevaFund
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
