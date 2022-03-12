import React from "react";
import "./OpenFalseSupportingTextFalseTooltip.sass";

class OpenFalseSupportingTextFalseTooltip extends React.Component {
  render() {
    const { src } = this.props;

    return <div className="help-icon" style={{ backgroundImage: `url(${src})` }}></div>;
  }
}

export default OpenFalseSupportingTextFalseTooltip;
