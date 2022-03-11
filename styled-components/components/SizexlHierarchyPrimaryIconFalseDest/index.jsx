import React from "react";
import SizexlIconFalse from "../SizexlIconFalse";
import styled from "styled-components";


class SizexlHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { sizexlIconFalseProps } = this.props;

    return (
      <Button>
        <SizexlIconFalse>{sizexlIconFalseProps.children}</SizexlIconFalse>
      </Button>
    );
  }
}

const Button = styled.div`
  height: 44px;
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 121px;
  border-radius: 8px;
`;

export default SizexlHierarchyPrimaryIconFalseDest;
