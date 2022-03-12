import React from "react";
import Content22 from "../Content22";
import styled from "styled-components";


class Content7 extends React.Component {
  render() {
    const { className, content22Props } = this.props;

    return (
      <Content className={`content-16 ${className || ""}`}>
        <Content22
          text={content22Props.text}
          supportingText={content22Props.supportingText}
          className={content22Props.className}
        />
      </Content>
    );
  }
}

const Content = styled.div`
  width: 264px;
  height: 72px;
  position: relative;
  margin-left: 16px;
  display: flex;

  &.content-16.content-17 {
    height: 52px;
  }

  &.content-16.content-18 {
    height: 52px;
  }

  &.content-16.content-19 {
    height: 52px;
  }

  &.content-16.content-20 {
    height: 52px;
  }

  &.content-16.content-21 {
    height: 52px;
  }

  &.content-16.content-22 {
    height: 52px;
  }
`;

export default Content7;
