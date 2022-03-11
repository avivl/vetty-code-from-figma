import React from "react";
import SizelgIconFalse3 from "../SizelgIconFalse3";
import "./SizelgHierarchyPrimaryIconFalseDest2.sass";

class SizelgHierarchyPrimaryIconFalseDest2 extends React.Component {
  render() {
    const { className, sizelgIconFalse3Props } = this.props;

    return (
      <div className={`button-30 ${className || ""}`}>
        <SizelgIconFalse3 className={sizelgIconFalse3Props.className}>
          {sizelgIconFalse3Props.children}
        </SizelgIconFalse3>
      </div>
    );
  }
}

export default SizelgHierarchyPrimaryIconFalseDest2;
