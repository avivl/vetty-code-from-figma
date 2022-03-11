import React from "react";
import CompanyLogo from "../CompanyLogo";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import styled from "styled-components";


class HeaderNavigation extends React.Component {
  render() {
    const { companyLogoProps, typeAvatarOpenFalseProps } = this.props;

    return (
      <HeaderNavigation1>
        <Container>
          <Content>
            <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
            <CurrentFalseBadgeFalseToggleFalseIc />
          </Content>
          <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
        </Container>
        <Divider src="/img/divider@1x.svg" />
      </HeaderNavigation1>
    );
  }
}

const HeaderNavigation1 = styled.div`
  width: 1728px;
  height: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

const Container = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 1362px;
`;

const Content = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 263px;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

const HeaderNavigation2 = styled.div`
  width: 1728px;
  height: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

const Container1 = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 1362px;
`;

const Content1 = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 263px;
`;

const Divider1 = styled.img`
  width: 1728px;
  height: 1px;
`;

const HeaderNavigation3 = styled.div`
  width: 1728px;
  height: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
`;

const Container2 = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 1362px;
`;

const Content2 = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 263px;
`;

const Divider2 = styled.img`
  width: 1728px;
  height: 1px;
`;

export default HeaderNavigation;
