import React from "react";
import styled from "styled-components";


class SizemdIconOnly extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <ButtonBase>
        <Eye src={src} />
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const Eye = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonBase1 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const ChevronRight = styled.img`
  width: 20px;
  height: 20px;
`;

export default SizemdIconOnly;
