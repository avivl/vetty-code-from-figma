import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterMediumOxfordBlue14px } from "../../styledMixins";


class SizesmIconLeading extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonBase className={`button-base ${className || ""}`}>
        <Text className="text-7">View Candidates</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  ${Border1pxMischka}
  width: 142px;
  height: 40px;
  margin-left: 359px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;

  &.button-base.button-base-1 {
    margin-left: -1px;
  }
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  min-width: 114px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizesmIconLeading;
