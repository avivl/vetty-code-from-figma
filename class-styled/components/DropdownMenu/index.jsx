import React from "react";
import Content from "../Content";
import DropdownMenuBase from "../DropdownMenuBase";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterMediumOxfordBlue14px } from "../../styledMixins";
import "./DropdownMenu.css";

class DropdownMenu extends React.Component {
  render() {
    const { text, supportingText, dropdownMenuBaseProps } = this.props;

    return (
      <div className="dropdown-menu screen">
        <DropdownListHeader>
          <AvatarLabelGroup>
            <Content />
            <TextAndSupportingText>
              <Text>{text}</Text>
              <SupportingText>{supportingText}</SupportingText>
            </TextAndSupportingText>
          </AvatarLabelGroup>
        </DropdownListHeader>
        <Divider></Divider>
        <DropdownMenuBase
          iconTrueCheckboxFalseShortcutFalseS={dropdownMenuBaseProps.iconTrueCheckboxFalseShortcutFalseS}
        />
      </div>
    );
  }
}

const DropdownListHeader = styled.div`
  width: 240px;
  height: 64px;
  display: flex;
`;

const AvatarLabelGroup = styled.div`
  margin-top: 12px;
  width: 193px;
  margin-left: 16px;
  position: relative;
  display: flex;
`;

const TextAndSupportingText = styled.div`
  width: 141px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const SupportingText = styled.div`
  ${InterNormalPaleSky14px}
  height: 20px;
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
