import React from "react";
import "./SizelgIconFalse.sass";

class SizelgIconFalse extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-base-26">
        <div className="text-93 inter-medium-white-16px">{children}</div>
      </div>
    );
  }
}

export default SizelgIconFalse;
