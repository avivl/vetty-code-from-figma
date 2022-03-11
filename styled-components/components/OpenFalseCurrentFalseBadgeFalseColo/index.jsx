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
  height: 40px;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 296px;
`;

export default OpenFalseCurrentFalseBadgeFalseColo;
