import React from "react";
import SizemdIconFalse5 from "../SizemdIconFalse5";
import "./SizemdHierarchyPrimaryIconFalseDest.sass";

class SizemdHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizemdIconFalse5Props } = this.props;

    return (
      <div className="button-01-4">
        <SizemdIconFalse5>{sizemdIconFalse5Props.children}</SizemdIconFalse5>
      </div>
    );
  }
}

export default SizemdHierarchyPrimaryIconFalseDest;
