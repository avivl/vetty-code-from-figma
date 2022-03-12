import React from "react";
import IconTrueCheckboxFalseShortcutFalseS from "../IconTrueCheckboxFalseShortcutFalseS";
import styled from "styled-components";


class DropdownMenuBase extends React.Component {
  render() {
    const { iconTrueCheckboxFalseShortcutFalseS } = this.props;

    return (
      <DropdownMenuBase1>
        <IconTrueCheckboxFalseShortcutFalseS
          logOut={iconTrueCheckboxFalseShortcutFalseS.logOut}
          text={iconTrueCheckboxFalseShortcutFalseS.text}
        />
      </DropdownMenuBase1>
    );
  }
}

const DropdownMenuBase1 = styled.div`
  width: 240px;
  height: 40px;
  position: relative;
  display: flex;
  background-color: var(--white);
`;

export default DropdownMenuBase;
