import React from "react";
import Content5 from "../Content5";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStatePlaceholde extends React.Component {
  render() {
    const { label, chevronDown, className, content5Props } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base ${className || ""}`}>
        <InputWithLabel className="input-with-label-1">
          <Label className="label-1">{label}</Label>
          <Input className="input-1">
            <Content5 text2Props={content5Props.text2Props} />
            <ChevronDown className="chevron-down" src={chevronDown} />
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
  width: 434px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 55px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 434px;
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

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-1  & {
    width: 183px;
  }
`;

const ChevronDown1 = styled.img`
  .input-dropdown-base.input-dropdown-base-2 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-3  & {
    width: 183px;
  }
`;

const ChevronDown2 = styled.img`
  .input-dropdown-base.input-dropdown-base-3 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label3 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-4  & {
    width: 203px;
  }
`;

const ChevronDown3 = styled.img`
  .input-dropdown-base.input-dropdown-base-4 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label4 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-5  & {
    width: 183px;
  }
`;

const ChevronDown4 = styled.img`
  .input-dropdown-base.input-dropdown-base-6 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label5 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-7  & {
    width: 183px;
  }
`;

const ChevronDown5 = styled.img`
  .input-dropdown-base.input-dropdown-base-7 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label6 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-8  & {
    width: 203px;
  }
`;

const ChevronDown6 = styled.img`
  .input-dropdown-base.input-dropdown-base-8 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 17.8px;
  }
`;

const Label7 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base.input-dropdown-base-9  & {
    width: 183px;
  }
`;

export default LabelTrueTypeDefaultStatePlaceholde;
