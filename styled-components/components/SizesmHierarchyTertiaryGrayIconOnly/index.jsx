import React from "react";
import SizesmIconOnly from "../SizesmIconOnly";
import styled from "styled-components";


class SizesmHierarchyTertiaryGrayIconOnly extends React.Component {
  render() {
    const { sizesmIconOnlyProps } = this.props;

    return (
      <Button>
        <SizesmIconOnly src={sizesmIconOnlyProps.src} />
      </Button>
    );
  }
}

const Button = styled.div`
  height: 36px;
  position: relative;
  margin-left: 61px;
  margin-top: -8px;
  display: flex;
  align-items: flex-start;
  min-width: 36px;
  border-radius: 8px;
`;

export default SizesmHierarchyTertiaryGrayIconOnly;
