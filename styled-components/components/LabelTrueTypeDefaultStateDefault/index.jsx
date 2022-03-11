import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStateDefault extends React.Component {
  render() {
    const { className, textProps } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base-19 ${className || ""}`}>
        <Label className="label-4">Agency or a Single Freelancer</Label>
        <Input className="input-3">
          <Text>{textProps.children}</Text>
          <ChevronDown className="chevron-down-1" src="/img/chevron-down@2x.svg" />
        </Input>
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  width: 234px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;

  &.input-dropdown-base-19.input-dropdown-base-20 {
    width: 346px;
  }

  &.input-dropdown-base-19.input-dropdown-base-22 {
    width: 346px;
  }
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  height: 44px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  min-width: 234px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const ChevronDown = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 55px;
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-19.input-dropdown-base-20  & {
    min-width: 346px;
  }
`;

const ChevronDown1 = styled.img`
  .input-dropdown-base-19.input-dropdown-base-20 & {
    margin-left: 167px;
  }
`;

const ChevronDown2 = styled.img`
  .input-dropdown-base-19.input-dropdown-base-21 & {
    width: 1px;
    height: 1px;
    margin-left: 65px;
    margin-top: 0.5px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-19.input-dropdown-base-22  & {
    min-width: 346px;
  }
`;

const ChevronDown3 = styled.img`
  .input-dropdown-base-19.input-dropdown-base-22 & {
    margin-left: 167px;
  }
`;

const ChevronDown4 = styled.img`
  .input-dropdown-base-19.input-dropdown-base-23 & {
    width: 1px;
    height: 1px;
    margin-left: 65px;
    margin-top: 0.5px;
  }
`;

export default LabelTrueTypeDefaultStateDefault;
