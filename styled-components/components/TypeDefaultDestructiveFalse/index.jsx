import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, InterNormalPaleSky16px, Border1pxMischka } from "../../styledMixins";


class TypeDefaultDestructiveFalse extends React.Component {
  render() {
    const { label, text, className } = this.props;

    return (
      <InputFieldBase className={`input-field-base ${className || ""}`}>
        <Label className="label-1">{label}</Label>
        <Input className="input">
          <Text className="text-10">{text}</Text>
        </Input>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;

  &.input-field-base.input-field-base-2 {
    width: 360px;
  }

  &.input-field-base.input-field-base-3 {
    width: 360px;
  }

  &.input-field-base.input-with-label {
    width: 360px;
  }

  &.input-field-base.input-field-base-5 {
    width: 360px;
  }

  &.input-field-base.input-field-base-6 {
    width: 360px;
  }

  &.input-field-base.input-field-base-7 {
    width: 360px;
  }

  &.input-field-base.input-with-label-1 {
    width: 360px;
  }

  &.input-field-base.input-field-base-8 {
    width: 360px;
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
  width: 434px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterNormalPaleSky16px}
  width: 406px;
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-2  & {
    width: 360px;
  }
`;

const Text1 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-2  & {
    width: 332px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-3  & {
    width: 360px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-3  & {
    width: 332px;
  }
`;

const Input3 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-with-label  & {
    width: 360px;
  }
`;

const Text3 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-with-label  & {
    width: 332px;
  }
`;

const Input4 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-4  & {
    background-color: var(--white-lilac);
  }
`;

const Input5 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-5  & {
    width: 360px;
  }
`;

const Text4 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-5  & {
    width: 332px;
  }
`;

const Input6 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-6  & {
    width: 360px;
  }
`;

const Text5 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-6  & {
    width: 332px;
  }
`;

const Input7 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-7  & {
    width: 360px;
  }
`;

const Text6 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-7  & {
    width: 332px;
  }
`;

const Input8 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-with-label-1  & {
    width: 360px;
  }
`;

const Text7 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-with-label-1  & {
    width: 332px;
  }
`;

const Input9 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-8  & {
    width: 360px;
  }
`;

const Text8 = styled.div`
  ${InterNormalPaleSky16px}

  .input-field-base.input-field-base-8  & {
    width: 332px;
  }
`;

export default TypeDefaultDestructiveFalse;
