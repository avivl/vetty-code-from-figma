import React from "react";
import SizexlIconFalse from "../SizexlIconFalse";
import "./SizexlHierarchyPrimaryIconFalseDest.sass";

class SizexlHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizexlIconFalseProps } = this.props;

    return (
      <div className="button-25">
        <SizexlIconFalse>{sizexlIconFalseProps.children}</SizexlIconFalse>
      </div>
    );
  }
}

export default SizexlHierarchyPrimaryIconFalseDest;
