import React from "react";
import Content2 from "../Content2";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import Content4 from "../Content4";
import styled from "styled-components";


class HeaderNavigation extends React.Component {
  render() {
    const { className, content2Props, content4Props } = this.props;

    return (
      <HeaderNavigation1 className={`header-navigation ${className || ""}`}>
        <Container className="container-1">
          <Content className="content-4">
            <Content2 companyLogoProps={content2Props.companyLogoProps} />
            <Navigation className="navigation">
              <CurrentFalseBadgeFalseToggleFalseIc />
            </Navigation>
          </Content>
          <Content4 typeAvatarOpenFalseProps={content4Props.typeAvatarOpenFalseProps} />
        </Container>
        <Divider className="divider-2" src="/img/divider@1x.png" />
      </HeaderNavigation1>
    );
  }
}

const HeaderNavigation1 = styled.div`
  width: 1728px;
  height: 73px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);

  &.header-navigation.header-navigation-2 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Container = styled.div`
  margin-left: 183px;
  width: 1362px;
  height: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  margin-top: 16px;
  width: 263px;
  position: relative;
  margin-left: 32px;
  display: flex;
`;

const Navigation = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

export default HeaderNavigation;
