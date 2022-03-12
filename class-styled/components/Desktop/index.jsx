import React from "react";
import Content8 from "../Content8";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import Content from "../Content";
import BreadcrumbsFalseSupportingTextTrueS from "../BreadcrumbsFalseSupportingTextTrueS";
import Content9 from "../Content9";
import styled from "styled-components";
import "./Desktop.css";

class Desktop extends React.Component {
  render() {
    const {
      divider,
      content8Props,
      currentTrueBadgeFalseToggleFalseIco,
      contentProps,
      breadcrumbsFalseSupportingTextTrueS,
      content91Props,
      content92Props,
      content93Props,
    } = this.props;

    return (
      <div className="desktop screen">
        <HeaderNavigation>
          <Container>
            <Content1>
              <Content8 content32Props={content8Props.content32Props} />
              <Navigation>
                <CurrentTrueBadgeFalseToggleFalseIco>
                  {currentTrueBadgeFalseToggleFalseIco.children}
                </CurrentTrueBadgeFalseToggleFalseIco>
              </Navigation>
            </Content1>
            <Content className={contentProps.className} />
          </Container>
          <Divider src={divider} />
        </HeaderNavigation>
        <Main>
          <Section>
            <Container1>
              <Sections>
                <HeaderSection>
                  <BreadcrumbsFalseSupportingTextTrueS
                    text={breadcrumbsFalseSupportingTextTrueS.text}
                    text2Props={breadcrumbsFalseSupportingTextTrueS.text2Props}
                    sizemdHierarchySecondaryGrayIconLea={
                      breadcrumbsFalseSupportingTextTrueS.sizemdHierarchySecondaryGrayIconLea
                    }
                  />
                </HeaderSection>
                <Section1>
                  <Section2>
                    <Container2>
                      <Content9
                        card1Props={content91Props.card1Props}
                        card2Props={content91Props.card2Props}
                        card3Props={content91Props.card3Props}
                      />
                      <Content9
                        className={content92Props.className}
                        card1Props={content92Props.card1Props}
                        card2Props={content92Props.card2Props}
                        card3Props={content92Props.card3Props}
                      />
                      <Content9
                        className={content93Props.className}
                        card1Props={content93Props.card1Props}
                        card2Props={content93Props.card2Props}
                        card3Props={content93Props.card3Props}
                      />
                    </Container2>
                  </Section2>
                </Section1>
              </Sections>
            </Container1>
          </Section>
        </Main>
      </div>
    );
  }
}

const HeaderNavigation = styled.div`
  width: 1728px;
  height: 73px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Container = styled.div`
  margin-left: 224px;
  width: 1280px;
  height: 72px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Content1 = styled.div`
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

const Main = styled.div`
  width: 1728px;
  height: 877px;
  display: flex;
  background-color: var(--white);
`;

const Section = styled.div`
  margin-top: 48px;
  width: 1728px;
  display: flex;
`;

const Container1 = styled.div`
  width: 1280px;
  margin-left: 224px;
  display: flex;
`;

const Sections = styled.div`
  width: 1216px;
  height: 733px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  width: 1216px;
  height: 82px;
  position: relative;
  display: flex;
`;

const Section1 = styled.div`
  width: 1216px;
  margin-top: 24px;
  display: flex;
`;

const Section2 = styled.div`
  width: 1216px;
  display: flex;
`;

const Container2 = styled.div`
  width: 1216px;
  height: 627px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Desktop;
