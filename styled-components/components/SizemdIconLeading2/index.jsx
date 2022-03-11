import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterMediumOxfordBlue14px } from "../../styledMixins";


class SizemdIconLeading2 extends React.Component {
  render() {
    const { text, className } = this.props;

    return (
      <ButtonBase className={`button-base-10 ${className || ""}`}>
        <Plus className="plus" src="/img/plus@2x.svg" />
        <Text className="text-36">{text}</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  ${Border1pxMischka}
  width: 173px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.button-base-10.button-base-11 {
    width: 201px;
  }

  &.button-base-10.button-base-12 {
    width: 168px;
  }

  &.button-base-10.button-base-13 {
    width: 201px;
  }

  &.button-base-10.button-base-14 {
    width: 168px;
  }

  &.button-base-10.button-base-15 {
    width: 201px;
  }
`;

const Plus = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 113px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .button-base-10.button-base-11  & {
    min-width: 141px;
  }
`;

const Text2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .button-base-10.button-base-12  & {
    min-width: 108px;
  }
`;

const Text3 = styled.div`
  ${InterMediumOxfordBlue14px}

  .button-base-10.button-base-13  & {
    min-width: 141px;
  }
`;

const Text4 = styled.div`
  ${InterMediumOxfordBlue14px}

  .button-base-10.button-base-14  & {
    min-width: 108px;
  }
`;

const Text5 = styled.div`
  ${InterMediumOxfordBlue14px}

  .button-base-10.button-base-15  & {
    min-width: 141px;
  }
`;

export default SizemdIconLeading2;
