import React, { Component } from "react";
import "../Spinner/Spinner.css";
const Spinner = WrappedComponent => {
  return class Spinner extends Component {
    render() {
      return this.props ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div className="loader" />
      );
    }
  };
};
export default Spinner;
