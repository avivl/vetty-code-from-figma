import React from "react";
import SizesmIconLeading from "../SizesmIconLeading";
import styled from "styled-components";


class Button extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Button1 className={`button ${className || ""}`}>
        <SizesmIconLeading />
      </Button1>
    );
  }
}

const Button1 = styled.div`
  width: 142px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
  border-radius: 8px;

  &.button.button-1 {
    margin-left: -1px;
  }
`;

export default Button;
