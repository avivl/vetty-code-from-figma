import React from "react";
import SizemdHierarchySecondaryGrayIconFal from "../SizemdHierarchySecondaryGrayIconFal";
import styled from "styled-components";


class Content11 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Content className={`content-47 ${className || ""}`}>
        <SizemdHierarchySecondaryGrayIconFal />
      </Content>
    );
  }
}

const Content = styled.div`
  height: 40px;
  width: 69px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;

  &.content-47.content-48 {
    margin-right: unset;
  }
`;

export default Content11;
