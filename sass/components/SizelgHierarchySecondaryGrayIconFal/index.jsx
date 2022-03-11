import React from "react";
import SizelgIconFalse2 from "../SizelgIconFalse2";
import "./SizelgHierarchySecondaryGrayIconFal.sass";

class SizelgHierarchySecondaryGrayIconFal extends React.Component {
  render() {
    const { sizelgIconFalse2Props } = this.props;

    return (
      <div className="button-25">
        <SizelgIconFalse2>{sizelgIconFalse2Props.children}</SizelgIconFalse2>
      </div>
    );
  }
}

export default SizelgHierarchySecondaryGrayIconFal;
