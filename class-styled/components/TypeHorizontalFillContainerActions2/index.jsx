import React from "react";
import SizelgHierarchySecondaryGrayIconFal from "../SizelgHierarchySecondaryGrayIconFal";
import styled from "styled-components";


class TypeHorizontalFillContainerActions2 extends React.Component {
  render() {
    const { sizelgHierarchySecondaryGrayIconFal } = this.props;

    return (
      <ModalActions>
        <SizelgHierarchySecondaryGrayIconFal
          sizelgIconFalse2Props={sizelgHierarchySecondaryGrayIconFal.sizelgIconFalse2Props}
        />
      </ModalActions>
    );
  }
}

const ModalActions = styled.div`
  margin-left: 24px;
  width: 375px;
  height: 44px;
  position: relative;
  margin-top: 32px;
  display: flex;
`;

export default TypeHorizontalFillContainerActions2;
