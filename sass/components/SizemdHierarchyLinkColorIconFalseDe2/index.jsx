import React from "react";
import SizemdIconFalse4 from "../SizemdIconFalse4";
import "./SizemdHierarchyLinkColorIconFalseDe2.sass";

class SizemdHierarchyLinkColorIconFalseDe2 extends React.Component {
  render() {
    const { className, sizemdIconFalse4Props } = this.props;

    return (
      <div className={`button-27 ${className || ""}`}>
        <SizemdIconFalse4 className={sizemdIconFalse4Props.className}>
          {sizemdIconFalse4Props.children}
        </SizemdIconFalse4>
      </div>
    );
  }
}

export default SizemdHierarchyLinkColorIconFalseDe2;
