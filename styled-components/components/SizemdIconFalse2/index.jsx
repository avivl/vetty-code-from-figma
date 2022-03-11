import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue14px } from "../../styledMixins";


class SizemdIconFalse2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonBase className={`button-base-16 ${className || ""}`}>
        <Text className="text-38">{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  height: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 114px;

  &.button-base-16.button-base-18 {
    min-width: 41px;
  }
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconFalse2;
