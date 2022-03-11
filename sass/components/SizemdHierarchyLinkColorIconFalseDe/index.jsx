import React from "react";
import SizemdIconFalse2 from "../SizemdIconFalse2";
import "./SizemdHierarchyLinkColorIconFalseDe.sass";

class SizemdHierarchyLinkColorIconFalseDe extends React.Component {
  render() {
    const { className, sizemdIconFalse2Props } = this.props;

    return (
      <div className={`button-13 ${className || ""}`}>
        <SizemdIconFalse2 className={sizemdIconFalse2Props.className}>
          {sizemdIconFalse2Props.children}
        </SizemdIconFalse2>
      </div>
    );
  }
}

export default SizemdHierarchyLinkColorIconFalseDe;
