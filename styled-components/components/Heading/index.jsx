import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";
import { InterMediumMirage24px } from "../../styledMixins";


class Heading extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <Heading1 className={`heading-5 ${className || ""}`}>
        <Text className="text-50">Technical Program Manager, Mobile Software Engineering</Text>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </Heading1>
    );
  }
}

const Heading1 = styled.div`
  height: 40px;
  position: relative;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 1297px;

  &.heading-5.heading-7 {
    margin-top: unset;
  }
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  width: 1164px;
  min-height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumMirage24px}

  .heading-5.heading-7  & {
    min-width: 663px;
    width: unset;
  }
`;

export default Heading;
