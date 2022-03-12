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
  width: 240px;
  height: 40px;
  display: flex;
`;

const LogOut = styled.img`
  margin-top: 12px;
  width: 16px;
  height: 16px;
  margin-left: 16px;
`;

const Text = styled.div`
  ${InterNormalOxfordBlue14px}
  margin-top: 10px;
  width: 51px;
  height: 20px;
  margin-left: 12px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default IconTrueCheckboxFalseShortcutFalseS;
