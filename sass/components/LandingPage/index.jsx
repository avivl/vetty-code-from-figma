import React from "react";
import "./LandingPage.sass";

class LandingPage extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <h1 className="title valign-text-middle inter-bold-santas-gray-64px">{children}</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
