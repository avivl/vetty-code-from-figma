import React from "react";
import Card from "../Card";
import styled from "styled-components";


class Content4 extends React.Component {
  render() {
    const { className, card1Props, card2Props, card3Props } = this.props;

    return (
      <Content className={`content-13 ${className || ""}`}>
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
  height: 193px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1152px;

  &.content-13.content-14 {
    margin-top: 24px;
  }

  &.content-13.content-15 {
    margin-top: 24px;
  }
`;

export default Content4;
