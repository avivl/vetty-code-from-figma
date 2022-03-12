import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class LabelFalseTypeSearchStatePlaceholde extends React.Component {
  render() {
    const { search, text2Props } = this.props;

    return (
      <InputDropdownBase>
        <InputWithLabel>
          <Input>
            <Content>
              <Search src={search} />
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </Content>
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
  width: 280px;
  display: flex;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 280px;
  height: 44px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 252px;
  height: 24px;
  margin-left: 14px;
  position: relative;
  display: flex;
`;

const Search = styled.img`
  margin-top: 1.8px;
  width: 20px;
  height: 20px;
`;

export default LabelFalseTypeSearchStatePlaceholde;
