import React from "react";
import SizemdIconOnly from "../SizemdIconOnly";
import styled from "styled-components";


class SizemdHierarchyTertiaryGrayIconOnly extends React.Component {
  render() {
    const { sizemdIconOnlyProps } = this.props;

    return (
      <Button>
        <SizemdIconOnly src={sizemdIconOnlyProps.src} />
      </Button>
    );
  }
}

const Button = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 40px;
  border-radius: 8px;
`;

const Button1 = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 40px;
  border-radius: 8px;
`;

export default SizemdHierarchyTertiaryGrayIconOnly;
