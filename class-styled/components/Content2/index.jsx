import React from "react";
import CompanyLogo from "../CompanyLogo";
import styled from "styled-components";


class Content2 extends React.Component {
  render() {
    const { className, companyLogoProps } = this.props;

    return (
      <Content className={`content-5 ${className || ""}`}>
        <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
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

  &.content-5.content-6 {
    margin-top: unset;
  }

  &.content-5.content-7 {
    margin-top: unset;
  }

  &.content-5.content-8 {
    margin-top: unset;
  }
`;

export default Content2;
