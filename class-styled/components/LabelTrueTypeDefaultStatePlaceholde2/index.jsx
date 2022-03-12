import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class LabelTrueTypeDefaultStatePlaceholde2 extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <InputDropdownBase className={`input-dropdown-base-13 ${className || ""}`}>
        <InputWithLabel className="input-with-label-4">
          <Label className="label-4">{label}</Label>
          <Input className="input-4">
            <Content className="content-14">
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </Content>
            <ChevronDown className="chevron-down-2" src="/img/chevron-down@2x.png" />
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
  width: 284px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 203px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 284px;
  height: 44px;
  margin-top: 6px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 228px;
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

const InputWithLabel1 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-14 & {
    width: 346px;
  }
`;

const Input1 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-14  & {
    width: 346px;
  }
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-13.input-dropdown-base-14  & {
    width: 55px;
  }
`;

const Content1 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-14 & {
    width: 290px;
  }
`;

const InputWithLabel2 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-15 & {
    width: 346px;
  }
`;

const Input2 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-15  & {
    width: 346px;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-13.input-dropdown-base-15  & {
    width: 183px;
  }
`;

const Content2 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-15 & {
    width: 290px;
  }
`;

const InputWithLabel3 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-16 & {
    width: 346px;
  }
`;

const Input3 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-16  & {
    width: 346px;
  }
`;

const Content3 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-16 & {
    width: 290px;
  }
`;

const InputWithLabel4 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-17 & {
    width: 346px;
  }
`;

const Input4 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-17  & {
    width: 346px;
  }
`;

const Label3 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-13.input-dropdown-base-17  & {
    width: 55px;
  }
`;

const Content4 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-17 & {
    width: 290px;
  }
`;

const InputWithLabel5 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-18 & {
    width: 346px;
  }
`;

const Input5 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-18  & {
    width: 346px;
  }
`;

const Label4 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-dropdown-base-13.input-dropdown-base-18  & {
    width: 183px;
  }
`;

const Content5 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-18 & {
    width: 290px;
  }
`;

const InputWithLabel6 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-19 & {
    width: 346px;
  }
`;

const Input6 = styled.div`
  ${Border1pxMischka}

  .input-dropdown-base-13.input-dropdown-base-19  & {
    width: 346px;
  }
`;

const Content6 = styled.div`
  .input-dropdown-base-13.input-dropdown-base-19 & {
    width: 290px;
  }
`;

export default LabelTrueTypeDefaultStatePlaceholde2;
