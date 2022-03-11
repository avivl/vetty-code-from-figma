import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import DropdownMenuBase from "../DropdownMenuBase";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterMediumOxfordBlue14px } from "../../styledMixins";
import "./DropdownMenu.css";

class DropdownMenu extends React.Component {
  render() {
    const { text, supportingText, dropdownMenuBaseProps } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dropdown-menu screen">
          <DropdownListHeader>
            <TypeAvatarOpenFalse />
            <TextAndSupportingText>
              <Text>{text}</Text>
              <SupportingText>{supportingText}</SupportingText>
            </TextAndSupportingText>
          </DropdownListHeader>
          <Divider></Divider>
          <DropdownMenuBase
            iconTrueCheckboxFalseShortcutFalseS={dropdownMenuBaseProps.iconTrueCheckboxFalseShortcutFalseS}
          />
        </div>
      </div>
    );
  }
}

const DropdownListHeader = styled.div`
  height: 64px;
  position: relative;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 240px;
`;

const TextAndSupportingText = styled.div`
  width: 141px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 40px;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 240px;
  height: 1px;
  background-color: var(--concrete);
`;

export default DropdownMenu;
