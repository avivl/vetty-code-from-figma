import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterNormalPaleSky16px } from "../../styledMixins";


class LabelFalseTypeSearchStatePlaceholde extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <InputDropdownBase>
        <Input>
          <Search src="/img/search-1@2x.svg" />
          <Text>{text}</Text>
        </Input>
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 280px;
`;

const Input = styled.div`
  ${Border1pxMischka}
  height: 44px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  min-width: 280px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Search = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 1px;
`;

const Text = styled.div`
  ${InterNormalPaleSky16px}
  min-height: 24px;
  margin-left: 8px;
  min-width: 53px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default LabelFalseTypeSearchStatePlaceholde;
