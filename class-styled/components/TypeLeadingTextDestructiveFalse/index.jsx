import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class TypeLeadingTextDestructiveFalse extends React.Component {
  render() {
    return (
      <InputWithLabel>
        <Label>Hourly Fee*</Label>
        <Input>
          <AddOn src="/img/add-on@2x.png" />
          <TextInput src="/img/text-input@2x.png" />
        </Input>
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 176px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 80px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 176px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const AddOn = styled.img`
  width: 37px;
  height: 44px;
`;

const TextInput = styled.img`
  width: 139px;
  height: 44px;
`;

const InputWithLabel1 = styled.div`
  width: 176px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 80px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input1 = styled.div`
  ${Border1pxMischka}
  width: 176px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const AddOn1 = styled.img`
  width: 37px;
  height: 44px;
`;

const TextInput1 = styled.img`
  width: 139px;
  height: 44px;
`;

export default TypeLeadingTextDestructiveFalse;
