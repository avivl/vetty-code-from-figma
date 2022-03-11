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
  height: 44px;
  position: relative;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 375px;
`;

export default TypeHorizontalFillContainerActions2;
