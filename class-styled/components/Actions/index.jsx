import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Actions extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <Actions1 className={`actions-6 ${className || ""}`}>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </Actions1>
    );
  }
}

const Actions1 = styled.div`
  width: 117px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;

  &.actions-6.actions-7 {
    margin-top: 16px;
  }
`;

export default Actions;
