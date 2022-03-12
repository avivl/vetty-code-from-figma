import React from "react";
import "./IconFalse2.css";

class IconFalse2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="badge-base-4">
        <div className="text-169 inter-medium-thunderbird-12px">{children}</div>
      </div>
    );
  }
}

export default IconFalse2;
