import React from "react";
import Content3 from "../Content3";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import BreadcrumbsFalseSupportingTextTrueS from "../BreadcrumbsFalseSupportingTextTrueS";
import Content4 from "../Content4";
import styled from "styled-components";
import "./Desktop.css";

class Desktop extends React.Component {
  render() {
    const {
      content3Props,
      currentTrueBadgeFalseToggleFalseIco,
      typeAvatarOpenFalseProps,
      breadcrumbsFalseSupportingTextTrueS,
      content41Props,
      content42Props,
      content43Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="desktop screen">
          <HeaderNavigation>
            <Container>
              <Content>
                <Content3 frame3Props={content3Props.frame3Props} />
                <CurrentTrueBadgeFalseToggleFalseIco>
                  {currentTrueBadgeFalseToggleFalseIco.children}
                </CurrentTrueBadgeFalseToggleFalseIco>
              </Content>
              <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
            </Container>
            <Divider src="/img/divider@1x.svg" />
          </HeaderNavigation>
          <Main>
            <BreadcrumbsFalseSupportingTextTrueS
              text={breadcrumbsFalseSupportingTextTrueS.text}
              supportingText={breadcrumbsFalseSupportingTextTrueS.supportingText}
              sizemdHierarchySecondaryGrayIconLea={
                breadcrumbsFalseSupportingTextTrueS.sizemdHierarchySecondaryGrayIconLea
              }
            />
            <Section>
              <Content4
                card1Props={content41Props.card1Props}
                card2Props={content41Props.card2Props}
                card3Props={content41Props.card3Props}
              />
              <Content4
                className={content42Props.className}
                card1Props={content42Props.card1Props}
                card2Props={content42Props.card2Props}
                card3Props={content42Props.card3Props}
              />
              <Content4
                className={content43Props.className}
                card1Props={content43Props.card1Props}
                card2Props={content43Props.card2Props}
                card3Props={content43Props.card3Props}
              />
            </Section>
          </Main>
        </div>
      </div>
    );
  }
}

const HeaderNavigation = styled.div`
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
  min-width: 1280px;
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

const Main = styled.div`
  width: 1728px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  align-items: center;
  min-height: 877px;
  background-color: var(--white);
`;

const Section = styled.div`
  width: 1216px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 627px;
`;

export default Desktop;
