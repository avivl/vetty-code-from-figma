import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class TypeDefaultDestructiveFalse extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <InputFieldBase className={`input-field-base ${className || ""}`}>
        <InputWithLabel className="input-with-label">
          <Label className="label">{label}</Label>
          <Input className="input">
            <Content className="content-11">
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </Content>
          </Input>
        </InputWithLabel>
      </InputFieldBase>
    );
  }
}

const InputFieldBase = styled.div`
  width: 434px;
  display: flex;

  &.input-field-base.input-field-base-2 {
    width: 346px;
  }

  &.input-field-base.input-field-base-3 {
    width: 346px;
  }

  &.input-field-base.input-field-base-7 {
    width: 346px;
  }

  &.input-field-base.input-field-base-8 {
    width: 346px;
  }
`;

const InputWithLabel = styled.div`
  width: 434px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 77px;
  height: 20px;
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
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 406px;
  height: 24px;
  margin-left: 14px;
  position: relative;
  display: flex;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-1  & {
    width: 47px;
  }
`;

const InputWithLabel1 = styled.div`
  .input-field-base.input-field-base-2 & {
    width: 346px;
  }
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-2  & {
    width: 346px;
  }
`;

const Content1 = styled.div`
  .input-field-base.input-field-base-2 & {
    width: 318px;
  }
`;

const InputWithLabel2 = styled.div`
  .input-field-base.input-field-base-3 & {
    width: 346px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-3  & {
    width: 346px;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-3  & {
    width: 47px;
  }
`;

const Content2 = styled.div`
  .input-field-base.input-field-base-3 & {
    width: 318px;
  }
`;

const Label3 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-5  & {
    width: 47px;
  }
`;

const Input3 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-6  & {
    background-color: var(--white-lilac);
  }
`;

const InputWithLabel3 = styled.div`
  .input-field-base.input-field-base-7 & {
    width: 346px;
  }
`;

const Input4 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-7  & {
    width: 346px;
  }
`;

const Content3 = styled.div`
  .input-field-base.input-field-base-7 & {
    width: 318px;
  }
`;

const InputWithLabel4 = styled.div`
  .input-field-base.input-field-base-8 & {
    width: 346px;
  }
`;

const Input5 = styled.div`
  ${Border1pxMischka}

  .input-field-base.input-field-base-8  & {
    width: 346px;
  }
`;

const Label4 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-8  & {
    width: 47px;
  }
`;

const Content4 = styled.div`
  .input-field-base.input-field-base-8 & {
    width: 318px;
  }
`;

const Label5 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-9  & {
    width: 47px;
  }
`;

const Label6 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-field-base.input-field-base-10  & {
    width: 47px;
  }
`;

export default TypeDefaultDestructiveFalse;
