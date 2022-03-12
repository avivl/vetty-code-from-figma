import React from "react";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="landing-page screen">
        <h1 className="title valign-text-middle inter-bold-santas-gray-64px">{children}</h1>
      </div>
    );
  }
}

export default LandingPage;
