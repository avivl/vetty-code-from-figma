import React from "react";
import SizelgIconFalse3 from "../SizelgIconFalse3";
import "./SizelgHierarchyPrimaryIconFalseDest2.sass";

class SizelgHierarchyPrimaryIconFalseDest2 extends React.Component {
  render() {
    const { className, sizelgIconFalseProps } = this.props;

    return (
      <div className={`button-32 ${className || ""}`}>
        <SizelgIconFalse3 className={sizelgIconFalseProps.className}>{sizelgIconFalseProps.children}</SizelgIconFalse3>
      </div>
    );
  }
}

export default SizelgHierarchyPrimaryIconFalseDest2;
