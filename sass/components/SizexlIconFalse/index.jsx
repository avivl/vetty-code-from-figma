import React from "react";
import "./SizexlIconFalse.sass";

class SizexlIconFalse extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-base-30">
        <div className="text-98 inter-medium-white-14px">{children}</div>
      </div>
    );
  }
}

export default SizexlIconFalse;
