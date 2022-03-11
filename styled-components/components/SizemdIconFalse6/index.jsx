import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue14px } from "../../styledMixins";


class SizemdIconFalse6 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonBase className={`button-base-29 ${className || ""}`}>
        <Text className="text-61">{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  height: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 113px;

  &.button-base-29.button-base-30 {
    min-width: 51px;
  }

  &.button-base-29.button-base-31 {
    min-width: 101px;
  }
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconFalse6;
