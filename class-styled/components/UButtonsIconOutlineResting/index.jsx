import React from "react";
import styled from "styled-components";
import { Border1pxSantasGray2 } from "../../styledMixins";


class UButtonsIconOutlineResting extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <UButtonsIconOutlineResting1 className={`u-buttons-icon-outline-resting ${className || ""}`}>
        <OverlapGroup className="overlap-group-1">
          <Users className="users" src={src} />
        </OverlapGroup>
      </UButtonsIconOutlineResting1>
    );
  }
}

const UButtonsIconOutlineResting1 = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 40px;

  &.u-buttons-icon-outline-resting.u-buttons-icon-outline-resting-2 {
    margin-left: 8px;
  }

  &.u-buttons-icon-outline-resting.u-buttons-icon-outline-resting-3 {
    margin-left: 8px;
  }

  &.u-buttons-icon-outline-resting.u-buttons-icon-outline-resting-4 {
    margin-left: 8px;
  }

  &.u-buttons-icon-outline-resting.u-buttons-icon-outline-resting-5 {
    margin-left: 8px;
  }
`;

const OverlapGroup = styled.div`
  ${Border1pxSantasGray2}
  height: 42px;
  margin-top: -1px;
  display: flex;
  padding: 11px;
  align-items: flex-start;
  min-width: 42px;
  border-radius: 10px;
`;

const Users = styled.img`
  width: 18px;
  height: 18px;
`;

export default UButtonsIconOutlineResting;
