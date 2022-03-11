import React from "react";
import SizelgHierarchySecondaryGrayIconFal from "../SizelgHierarchySecondaryGrayIconFal";
import "./TypeHorizontalFillContainerActions2.sass";

class TypeHorizontalFillContainerActions2 extends React.Component {
  render() {
    const { sizelgHierarchySecondaryGrayIconFalProps } = this.props;

    return (
      <div className="modal-actions">
        <SizelgHierarchySecondaryGrayIconFal
          sizelgIconFalse2Props={sizelgHierarchySecondaryGrayIconFalProps.sizelgIconFalse2Props}
        />
      </div>
    );
  }
}

export default TypeHorizontalFillContainerActions2;
