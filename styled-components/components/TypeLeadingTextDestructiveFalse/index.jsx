import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class TypeLeadingTextDestructiveFalse extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <InputFieldBase className={`input-field-base-9 ${className || ""}`}>
        <Label className="label-3">Hourly Fee*</Label>
        <Input className="input-2">
          <AddOn className="add-on" src="/img/add-on@2x.svg" />
          <TextInput className="text-input" src="/img/text-input@2x.svg" />
        </Input>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;

  &.input-field-base-9.input-field-base-10 {
    width: 346px;
  }

  &.input-field-base-9.input-field-base-11 {
    width: 161px;
  }

  &.input-field-base-9.input-field-base-12 {
    width: 346px;
  }

  &.input-field-base-9.input-field-base-13 {
    width: 161px;
  }
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 176px;
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

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-field-base-9.input-field-base-10  & {
    min-width: 346px;
  }
`;

const TextInput1 = styled.img`
  .input-field-base-9.input-field-base-10 & {
    width: 309px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-field-base-9.input-field-base-11  & {
    height: 44px;
    padding: 21.2px 18.2px;
    align-items: flex-end;
    min-width: 161px;
  }
`;

const AddOn1 = styled.img`
  .input-field-base-9.input-field-base-11 & {
    width: 1px;
    height: 1px;
  }
`;

const TextInput2 = styled.img`
  .input-field-base-9.input-field-base-11 & {
    width: 1px;
    height: 1px;
    margin-left: 80px;
  }
`;

const Input3 = styled.div`
  ${Border1pxMischka}

  .input-field-base-9.input-field-base-12  & {
    min-width: 346px;
  }
`;

const TextInput3 = styled.img`
  .input-field-base-9.input-field-base-12 & {
    width: 309px;
  }
`;

const Input4 = styled.div`
  ${Border1pxMischka}

  .input-field-base-9.input-field-base-13  & {
    height: 44px;
    padding: 21.2px 18.2px;
    align-items: flex-end;
    min-width: 161px;
  }
`;

const AddOn2 = styled.img`
  .input-field-base-9.input-field-base-13 & {
    width: 1px;
    height: 1px;
  }
`;

const TextInput4 = styled.img`
  .input-field-base-9.input-field-base-13 & {
    width: 1px;
    height: 1px;
    margin-left: 80px;
  }
`;

export default TypeLeadingTextDestructiveFalse;
