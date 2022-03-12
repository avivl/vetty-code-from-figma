import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class LabelTrueTypeDefaultStateDefault3 extends React.Component {
  render() {
    const { label, className, selectedTrueSupportingTextFalseType } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base-23 ${className || ""}`}>
        <InputWithLabel className="input-with-label-35">
          <Label className="label-31">{label}</Label>
          <SelectedTrueSupportingTextFalseType
            chevronDown={selectedTrueSupportingTextFalseType.chevronDown}
            className={selectedTrueSupportingTextFalseType.className}
            textProps={selectedTrueSupportingTextFalseType.textProps}
          />
        </InputWithLabel>
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  flex: 1;
  display: flex;

  &.input-dropdown-base-23.input-dropdown-base-24 {
    flex: 1;
    max-height: 70px;
  }

  &.input-dropdown-base-23.input-dropdown-base-25 {
    flex: 1;
    max-height: 70px;
  }
`;

const InputWithLabel = styled.div`
  width: 434px;
  height: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 183px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-23.input-dropdown-base-24  & {
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-23.input-dropdown-base-25  & {
    width: 203px;
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

export default LabelTrueTypeDefaultStateDefault3;
