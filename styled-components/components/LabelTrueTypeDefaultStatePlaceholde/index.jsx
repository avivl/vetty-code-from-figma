import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, InterNormalPaleSky16px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStatePlaceholde extends React.Component {
  render() {
    const { label, text, className } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base ${className || ""}`}>
        <Label className="label-2">{label}</Label>
        <Input className="input-1">
          <Text className="text-11">{text}</Text>
          <ChevronDown className="chevron-down" src="/img/chevron-down@2x.svg" />
        </Input>
      </InputDropdownBase>
    );
  }
}

const InputDropdownBase = styled.div`
  width: 434px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;

  &.input-dropdown-base.input-dropdown-base-2 {
    width: 284px;
  }

  &.input-dropdown-base.input-dropdown-base-3 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-4 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-5 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-10 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-11 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-12 {
    width: 346px;
  }

  &.input-dropdown-base.input-dropdown-base-18 {
    width: 284px;
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
  height: 44px;
  margin-top: 6px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  min-width: 434px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterNormalPaleSky16px}
  min-height: 24px;
  min-width: 124px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const ChevronDown = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 262px;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-1  & {
    min-width: 169px;
  }
`;

const ChevronDown1 = styled.img`
  .input-dropdown-base.input-dropdown-base-1 & {
    margin-left: 217px;
  }
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-2  & {
    min-width: 284px;
  }
`;

const Text2 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-2  & {
    min-width: 227px;
  }
`;

const ChevronDown2 = styled.img`
  .input-dropdown-base.input-dropdown-base-2 & {
    margin-left: 9px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-3  & {
    min-width: 346px;
  }
`;

const ChevronDown3 = styled.img`
  .input-dropdown-base.input-dropdown-base-3 & {
    margin-left: 174px;
  }
`;

const Input3 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-4  & {
    min-width: 346px;
  }
`;

const Text3 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-4  & {
    min-width: 169px;
  }
`;

const ChevronDown4 = styled.img`
  .input-dropdown-base.input-dropdown-base-4 & {
    margin-left: 129px;
  }
`;

const Input4 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-5  & {
    min-width: 346px;
  }
`;

const Text4 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-5  & {
    min-width: 227px;
  }
`;

const ChevronDown5 = styled.img`
  .input-dropdown-base.input-dropdown-base-5 & {
    margin-left: 71px;
  }
`;

const ChevronDown6 = styled.img`
  .input-dropdown-base.input-dropdown-base-6 & {
    width: 1px;
    height: 1px;
    margin-left: 272px;
    margin-top: 0.5px;
  }
`;

const Text5 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-7  & {
    min-width: 169px;
  }
`;

const ChevronDown7 = styled.img`
  .input-dropdown-base.input-dropdown-base-7 & {
    width: 1px;
    height: 1px;
    margin-left: 227px;
    margin-top: 0.5px;
  }
`;

const Text6 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-8  & {
    min-width: 227px;
  }
`;

const ChevronDown8 = styled.img`
  .input-dropdown-base.input-dropdown-base-8 & {
    width: 1px;
    height: 1px;
    margin-left: 169px;
    margin-top: 0.5px;
  }
`;

const Text7 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-9  & {
    min-width: 169px;
  }
`;

const ChevronDown9 = styled.img`
  .input-dropdown-base.input-dropdown-base-9 & {
    margin-left: 217px;
  }
`;

const Input5 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-10  & {
    min-width: 346px;
  }
`;

const ChevronDown10 = styled.img`
  .input-dropdown-base.input-dropdown-base-10 & {
    margin-left: 174px;
  }
`;

const Input6 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-11  & {
    min-width: 346px;
  }
`;

const Text8 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-11  & {
    min-width: 169px;
  }
`;

const ChevronDown11 = styled.img`
  .input-dropdown-base.input-dropdown-base-11 & {
    margin-left: 129px;
  }
`;

const Input7 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-12  & {
    min-width: 346px;
  }
`;

const Text9 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-12  & {
    min-width: 227px;
  }
`;

const ChevronDown12 = styled.img`
  .input-dropdown-base.input-dropdown-base-12 & {
    margin-left: 71px;
  }
`;

const ChevronDown13 = styled.img`
  .input-dropdown-base.input-dropdown-base-13 & {
    width: 1px;
    height: 1px;
    margin-left: 272px;
    margin-top: 0.5px;
  }
`;

const Text10 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-14  & {
    min-width: 169px;
  }
`;

const ChevronDown14 = styled.img`
  .input-dropdown-base.input-dropdown-base-14 & {
    width: 1px;
    height: 1px;
    margin-left: 227px;
    margin-top: 0.5px;
  }
`;

const Text11 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-15  & {
    min-width: 227px;
  }
`;

const ChevronDown15 = styled.img`
  .input-dropdown-base.input-dropdown-base-15 & {
    width: 1px;
    height: 1px;
    margin-left: 169px;
    margin-top: 0.5px;
  }
`;

const Text12 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-17  & {
    min-width: 169px;
  }
`;

const ChevronDown16 = styled.img`
  .input-dropdown-base.input-dropdown-base-17 & {
    margin-left: 217px;
  }
`;

const Input8 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base.input-dropdown-base-18  & {
    min-width: 284px;
  }
`;

const Text13 = styled.div`
  ${InterNormalPaleSky16px}

  .input-dropdown-base.input-dropdown-base-18  & {
    min-width: 227px;
  }
`;

const ChevronDown17 = styled.img`
  .input-dropdown-base.input-dropdown-base-18 & {
    margin-left: 9px;
  }
`;

export default LabelTrueTypeDefaultStatePlaceholde;
