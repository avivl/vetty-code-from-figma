import React from "react";
import Content2 from "../Content2";
import styled from "styled-components";


class Content10 extends React.Component {
  render() {
    const { className, content2Props } = this.props;

    return (
      <Content className={`content-35 ${className || ""}`}>
        <Content2 className={content2Props.className} companyLogoProps={content2Props.companyLogoProps} />
      </Content>
    );
  }
}

const Content = styled.div`
  width: 147px;
  height: 33px;
  position: relative;
  display: flex;

  &.content-35.content-36 {
    margin-top: 19.4px;
    height: 33.12676239013672px;
    margin-left: 32px;
  }

  &.content-35.content-37 {
    height: 33.12676239013672px;
    margin-left: 16px;
  }
`;

export default Content10;
