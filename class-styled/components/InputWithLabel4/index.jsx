import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, Border1pxMischka } from "../../styledMixins";


class InputWithLabel4 extends React.Component {
  render() {
    const { label, className, text2Props } = this.props;

    return (
      <InputWithLabel className={`input-with-label-14 ${className || ""}`}>
        <Label className="label-12">{label}</Label>
        <div className="input-23">
          <Content className="content-43">
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </Content>
        </div>
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 360px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 47px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 360px;
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
  width: 332px;
  height: 24px;
  margin-left: 14px;
  position: relative;
  display: flex;
`;

const Label1 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-15  & {
    width: 44px;
  }
`;

const Label2 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-16  & {
    width: 73px;
  }
`;

const Label3 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-17  & {
    width: 36px;
  }
`;

const Label4 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-18  & {
    width: 66px;
  }
`;

const Label5 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-19  & {
    width: 36px;
  }
`;

const Label6 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-20  & {
    width: 66px;
  }
`;

const Label7 = styled.div`
  ${InterMediumOxfordBlue14px}

  .input-with-label-14.input-with-label-21  & {
    width: 123px;
  }
`;

export default InputWithLabel4;
