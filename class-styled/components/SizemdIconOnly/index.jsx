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
  flex: 1;
  width: 40px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const Eye = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ButtonBase1 = styled.div`
  flex: 1;
  width: 40px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const ChevronRight = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ButtonBase2 = styled.div`
  flex: 1;
  width: 40px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const ChevronRight1 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export default SizemdIconOnly;
