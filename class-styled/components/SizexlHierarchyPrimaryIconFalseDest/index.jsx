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
  width: 121px;
  height: 44px;
  margin-left: 784px;
  position: relative;
  display: flex;
  border-radius: 8px;
`;

export default SizexlHierarchyPrimaryIconFalseDest;
