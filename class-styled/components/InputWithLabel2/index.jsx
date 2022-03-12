import React from "react";
import Input from "../Input";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class InputWithLabel2 extends React.Component {
  render() {
    const { label, className, inputProps } = this.props;

    return (
      <InputWithLabel className={`input-with-label-22 ${className || ""}`}>
        <Label className="label-13">{label}</Label>
        <Input className={inputProps.className} text2Props={inputProps.text2Props} />
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 904px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;

  &.input-with-label-22.input-with-label-26 {
    height: 154px;
  }
`;

const Label = styled.p`
  ${InterMediumOxfordBlue14px}
  width: 368px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Label1 = styled.p`
  ${InterMediumOxfordBlue14px}

  .input-with-label-22.input-with-label-23  & {
    width: 201px;
  }
`;

const Label2 = styled.p`
  ${InterMediumOxfordBlue14px}

  .input-with-label-22.input-with-label-24  & {
    width: 201px;
  }
`;

const Label3 = styled.p`
  ${InterMediumOxfordBlue14px}

  .input-with-label-22.input-with-label-25  & {
    width: 201px;
  }
`;

const Label4 = styled.p`
  ${InterMediumOxfordBlue14px}

  .input-with-label-22.input-with-label-26  & {
    width: 201px;
  }
`;

const Label5 = styled.p`
  ${InterMediumOxfordBlue14px}

  .input-with-label-22.input-with-label-28  & {
    width: 201px;
  }
`;

export default InputWithLabel2;
