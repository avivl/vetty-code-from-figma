import React from "react";
import Heading from "../Heading";
import "./Container.sass";

class Container extends React.Component {
  render() {
    const { className, headingProps } = this.props;

    return (
      <div className={`container-9 ${className || ""}`}>
        <Heading stateDefaultProps={headingProps.stateDefaultProps} />
        <div className="divider-21"></div>
      </div>
    );
  }
}

export default Container;
