import React from "react";
import Heading from "../Heading";
import styled from "styled-components";


class Container extends React.Component {
  render() {
    const { className, headingProps } = this.props;

    return (
      <Container1 className={`container-7 ${className || ""}`}>
        <Heading stateDefaultProps={headingProps.stateDefaultProps} />
        <Divider className="divider-12"></Divider>
      </Container1>
    );
  }
}

const Container1 = styled.div`
  position: absolute;
  width: 1361px;
  top: 229px;
  left: 184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 91px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px #0000000d;

  &.container-7.container-8 {
    top: 83px;
    left: 307px;
    background-color: unset;
    box-shadow: unset;
  }
`;

const Divider = styled.div`
  width: 1297px;
  height: 1px;
  margin-top: 10px;
  background-color: #4e5aa6;
`;

const Divider1 = styled.div`
  .container-7.container-8 & {
    background-color: var(--gallery);
  }
`;

export default Container;
