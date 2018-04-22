import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper amber accent-4">
            <a href="" className="left brand-logo">
              SevaFund
            </a>
            <ul className="right">
              <li>
                <a href="">Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
