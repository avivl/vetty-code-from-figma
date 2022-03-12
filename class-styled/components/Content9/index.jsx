import React from "react";
import Card from "../Card";
import styled from "styled-components";


class Content9 extends React.Component {
  render() {
    const { className, card1Props, card2Props, card3Props } = this.props;

    return (
      <Content className={`content-28 ${className || ""}`}>
        <Card sizemdHierarchyLinkColorIconFalseDe={card1Props.sizemdHierarchyLinkColorIconFalseDe} />
        <Card
          className={card2Props.className}
          sizemdHierarchyLinkColorIconFalseDe={card2Props.sizemdHierarchyLinkColorIconFalseDe}
        />
        <Card
          className={card3Props.className}
          sizemdHierarchyLinkColorIconFalseDe={card3Props.sizemdHierarchyLinkColorIconFalseDe}
        />
      </Content>
    );
  }
}

const Content = styled.div`
  margin-left: 32px;
  width: 1152px;
  height: 193px;
  position: relative;
  display: flex;

  &.content-28.content-29 {
    margin-top: 24px;
  }

  &.content-28.content-30 {
    margin-top: 24px;
  }
`;

export default Content9;
