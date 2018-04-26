import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="SevaFund"
          description="Donation"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <a className="btn grey darken-4">Fund Project</a>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
