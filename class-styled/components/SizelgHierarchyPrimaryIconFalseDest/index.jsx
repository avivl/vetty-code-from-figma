import React from "react";
import styled from "styled-components";
import { InterMediumWhite16px } from "../../styledMixins";


class SizelgHierarchyPrimaryIconFalseDest extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Button>
        <button>
          <Text>{children}</Text>
        </button>
      </Button>
    );
  }
}

const Button = styled.div`
  width: 360px;
  height: 44px;
  display: flex;
  border-radius: 8px;
`;

const ButtonBase = styled.div`
  flex: 1;
  width: 360px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite16px}
  margin-top: 10px;
  width: 88px;
  height: 24px;
  margin-left: 136px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default SizelgHierarchyPrimaryIconFalseDest;
