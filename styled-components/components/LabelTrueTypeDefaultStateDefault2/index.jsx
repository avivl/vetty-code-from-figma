import React from "react";
import SelectedTrueSupportingTextFalseType from "../SelectedTrueSupportingTextFalseType";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class LabelTrueTypeDefaultStateDefault2 extends React.Component {
  render() {
    const { label, className, selectedTrueSupportingTextFalseType } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base-25 ${className || ""}`}>
        <Label className="label-27">{label}</Label>
        <SelectedTrueSupportingTextFalseType
          className={selectedTrueSupportingTextFalseType.className}
          textProps={selectedTrueSupportingTextFalseType.textProps}
        />
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  width: 434px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-25.input-dropdown-base-26  & {
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-25.input-dropdown-base-27  & {
    text-shadow: 0px 0px 0px #f4ebff, 0px 1px 2px #1018280d;
  }
`;

export default LabelTrueTypeDefaultStateDefault2;
