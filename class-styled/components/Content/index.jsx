import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import styled from "styled-components";


class Content extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Content1 className={`content ${className || ""}`}>
        <TypeAvatarOpenFalse />
      </Content1>
    );
  }
}

const Content1 = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;

  &.content.content-1 {
    align-self: center;
    margin-right: 32px;
  }
`;

export default Content;
