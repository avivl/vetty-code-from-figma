import React from "react";
import Text from "../Text";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStateDefault2 extends React.Component {
  render() {
    const { textProps } = this.props;

    return (
      <InputDropdownBase>
        <InputWithLabel>
          <Label>Agency or a Single Freelancer</Label>
          <Input>
            <Content>
              <Text>{textProps.children}</Text>
            </Content>
            <ChevronDown src="/img/chevron-down@2x.png" />
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
  width: 346px;
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
  width: 346px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 290px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const ChevronDown = styled.img`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

const InputDropdownBase1 = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel1 = styled.div`
  width: 346px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.p`
  ${InterMediumOxfordBlue14px}
  width: 200px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input1 = styled.div`
  ${Border1pxMischka}
  width: 346px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content1 = styled.div`
  margin-top: 10px;
  width: 290px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const ChevronDown1 = styled.img`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export default LabelTrueTypeDefaultStateDefault2;
