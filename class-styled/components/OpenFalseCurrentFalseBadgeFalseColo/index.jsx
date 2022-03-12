import React from "react";
import CurrentFalseBadgeFalseToggleFalseIc2 from "../CurrentFalseBadgeFalseToggleFalseIc2";
import styled from "styled-components";


class OpenFalseCurrentFalseBadgeFalseColo extends React.Component {
  render() {
    const { currentFalseBadgeFalseToggleFalseIc } = this.props;

    return (
      <NavItemDropdownBase>
        <CurrentFalseBadgeFalseToggleFalseIc2
          text={currentFalseBadgeFalseToggleFalseIc.text}
          socialIconProps={currentFalseBadgeFalseToggleFalseIc.socialIconProps}
        />
      </NavItemDropdownBase>
    );
  }
}

const NavItemDropdownBase = styled.div`
  width: 296px;
  height: 40px;
  margin-left: 8px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export default OpenFalseCurrentFalseBadgeFalseColo;
