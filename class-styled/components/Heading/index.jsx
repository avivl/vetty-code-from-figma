import React from "react";
import TextAndSupportingText3 from "../TextAndSupportingText3";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Heading extends React.Component {
  render() {
    const { className, textAndSupportingText3Props, stateDefaultProps } = this.props;

    return (
      <Heading1 className={`heading-6 ${className || ""}`}>
        <TextAndSupportingText3 className={textAndSupportingText3Props.className} />
        <StateDefault sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps} />
      </Heading1>
    );
  }
}

const Heading1 = styled.div`
  width: 1297px;
  height: 40px;
  position: relative;
  margin-top: 40px;
  display: flex;

  &.heading-6.heading-7 {
    margin-top: unset;
  }
`;

export default Heading;
