import React from "react";
import styled from "styled-components";
import { InterNormalOxfordBlue14px } from "../../styledMixins";


class IconTrueCheckboxFalseShortcutFalseS extends React.Component {
  render() {
    const { logOut, text } = this.props;

    return (
      <DropdownListItem>
        <LogOut src={logOut} />
        <Text>{text}</Text>
      </DropdownListItem>
    );
  }
}

const DropdownListItem = styled.div`
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 240px;
`;

const LogOut = styled.img`
  width: 16px;
  height: 16px;
`;

const Text = styled.div`
  ${InterNormalOxfordBlue14px}
  min-height: 20px;
  margin-left: 12px;
  min-width: 51px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default IconTrueCheckboxFalseShortcutFalseS;
