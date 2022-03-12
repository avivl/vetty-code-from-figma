import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class TypeLeadingTextDestructiveFalse2 extends React.Component {
  render() {
    const { addOn, textInput, className } = this.props;

    return (
      <InputFieldBase className={`input-field-base-12 ${className || ""}`}>
        <InputWithLabel className="input-with-label-9">
          <Label className="label-8">Hourly Fee*</Label>
          <Input className="input-16">
            <AddOn className="add-on-1" src={addOn} />
            <TextInput className="text-input-1" src={textInput} />
          </Input>
        </InputWithLabel>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 346px;
  display: flex;

  &.input-field-base-12.input-field-base-13 {
    width: 161px;
  }

  &.input-field-base-12.input-field-base-14 {
    width: 161px;
  }
`;

const InputWithLabel = styled.div`
  width: 346px;
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
  width: 346px;
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
  width: 309px;
  height: 44px;
`;

const InputWithLabel1 = styled.div`
  .input-field-base-12.input-field-base-13 & {
    width: 161px;
  }
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-field-base-12.input-field-base-13  & {
    width: 161px;
    height: 44px;
  }
`;

const AddOn1 = styled.img`
  .input-field-base-12.input-field-base-13 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 18.2px;
  }
`;

const TextInput1 = styled.img`
  .input-field-base-12.input-field-base-13 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 79.5px;
  }
`;

const InputWithLabel2 = styled.div`
  .input-field-base-12.input-field-base-14 & {
    width: 161px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-field-base-12.input-field-base-14  & {
    width: 161px;
    height: 44px;
  }
`;

const AddOn2 = styled.img`
  .input-field-base-12.input-field-base-14 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 18.2px;
  }
`;

const TextInput2 = styled.img`
  .input-field-base-12.input-field-base-14 & {
    margin-top: 21.8px;
    width: 1px;
    height: 1px;
    margin-left: 79.5px;
  }
`;

export default TypeLeadingTextDestructiveFalse2;
