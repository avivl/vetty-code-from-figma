import React from "react";
import SizelgIconFalse22 from "../SizelgIconFalse22";
import "./SizelgHierarchySecondaryGrayIconFal.css";

class SizelgHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { sizelgIconFalse2Props } = this.props;

    return (
      <div className="button-27">
        <SizelgIconFalse22>{sizelgIconFalse2Props.children}</SizelgIconFalse22>
      </div>
    );
  }
}

export default SizelgHierarchySecondaryGrayIconFal;
