import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue14px } from "../../styledMixins";


class SizemdIconFalse2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonBase className={`button-base-17 ${className || ""}`}>
        <Text className="text-99">{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 114px;
  display: flex;

  &.button-base-17.button-base-19 {
    width: 41px;
  }
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  width: 114px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumRoyalBlue14px}

  .button-base-17.button-base-19  & {
    width: 41px;
  }
`;

export default SizemdIconFalse2;
