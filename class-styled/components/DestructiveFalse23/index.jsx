import React from "react";
import Input2 from "../Input2";
import styled from "styled-components";


class DestructiveFalse23 extends React.Component {
  render() {
    const { className, input2Props } = this.props;

    return (
      <InputWithLabel className={`input-with-label-11 ${className || ""}`}>
        <Label className="label-10" src="/img/label-3@2x.png" />
        <Input2 text2Props={input2Props.text2Props} />
      </InputWithLabel>
    );
  }
}

const InputWithLabel = styled.div`
  width: 346px;
  height: 162px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.img`
  margin-left: 2.5px;
  width: 310.277099609375px;
  height: 46.77685546875px;
  margin-top: 3.2px;
`;

const Label1 = styled.img`
  .input-with-label-11.input-with-label-12 & {
    width: 310.27734375px;
  }
`;

export default DestructiveFalse23;
