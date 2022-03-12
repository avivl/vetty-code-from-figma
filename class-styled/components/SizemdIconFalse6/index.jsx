import React from "react";
import styled from "styled-components";
import { InterMediumRoyalBlue14px } from "../../styledMixins";


class SizemdIconFalse6 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonBase className={`button-base-30 ${className || ""}`}>
        <Text className="text-118">{children}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 113px;
  display: flex;

  &.button-base-30.button-base-31 {
    width: 51px;
  }

  &.button-base-30.button-base-32 {
    width: 101px;
  }
`;

const Text = styled.div`
  ${InterMediumRoyalBlue14px}
  width: 113px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumRoyalBlue14px}

  .button-base-30.button-base-31  & {
    width: 51px;
  }
`;

const Text2 = styled.div`
  ${InterMediumRoyalBlue14px}

  .button-base-30.button-base-32  & {
    width: 101px;
  }
`;

export default SizemdIconFalse6;
