import React from "react";
import styled from "styled-components";


class SizesmIconOnly extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <ButtonBase>
        <LogOut src={src} />
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 36px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const LogOut = styled.img`
  margin-top: 8px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export default SizesmIconOnly;
