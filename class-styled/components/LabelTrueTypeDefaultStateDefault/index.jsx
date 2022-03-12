import React from "react";
import Content6 from "../Content6";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStateDefault extends React.Component {
  render() {
    const { chevronDown, className, content6Props } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base-10 ${className || ""}`}>
        <InputWithLabel className="input-with-label-3">
          <Label className="label-3">Agency or a Single Freelancer</Label>
          <Input className="input-3">
            <Content6 textProps={content6Props.textProps} />
            <ChevronDown className="chevron-down-1" src={chevronDown} />
          </Input>
        </InputWithLabel>
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 234px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  width: 200px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 234px;
  height: 44px;
  position: relative;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const ChevronDown = styled.img`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

const ChevronDown1 = styled.img`
  .input-dropdown-base-10.input-dropdown-base-11 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const ChevronDown2 = styled.img`
  .input-dropdown-base-10.input-dropdown-base-12 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

export default LabelTrueTypeDefaultStateDefault;
