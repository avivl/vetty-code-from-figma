import React from "react";
import Content32 from "../Content32";
import styled from "styled-components";


class Content8 extends React.Component {
  render() {
    const { className, content32Props } = this.props;

    return (
      <Content className={`content-24 ${className || ""}`}>
        <Content32 frame3Props={content32Props.frame3Props} />
      </Content>
    );
  }
}

const Content = styled.div`
  margin-top: 3.4px;
  width: 147px;
  height: 33.12676239013672px;
  position: relative;
  display: flex;

  &.content-24.content-25 {
    margin-top: 19.4px;
    margin-left: 32px;
  }
`;

export default Content8;
