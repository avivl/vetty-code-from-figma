import React from "react";
import SizelgIconFalse from "../SizelgIconFalse";
import "./SizelgHierarchyPrimaryIconFalseDest.sass";

class SizelgHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizelgIconFalseProps } = this.props;

    return (
      <div className="button-20">
        <SizelgIconFalse>{sizelgIconFalseProps.children}</SizelgIconFalse>
      </div>
    );
  }
}

export default SizelgHierarchyPrimaryIconFalseDest;
