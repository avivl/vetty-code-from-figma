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
  width: 36px;
  height: 36px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const LogOut = styled.img`
  width: 20px;
  height: 20px;
`;

export default SizesmIconOnly;
