import React from "react";
import Content2 from "../Content2";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import Content4 from "../Content4";
import BreadcrumbsFalseSupportingTextTrueS2 from "../BreadcrumbsFalseSupportingTextTrueS2";
import SupportingTextFalseStyleSimpleActio from "../SupportingTextFalseStyleSimpleActio";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import StyleTextSupportingTextTrueStateDef from "../StyleTextSupportingTextTrueStateDef";
import StyleTextSupportingTextFalseStateDe from "../StyleTextSupportingTextFalseStateDe";
import StyleTextSupportingTextFalseStateDe2 from "../StyleTextSupportingTextFalseStateDe2";
import StyleTextSupportingTextFalseStateDe3 from "../StyleTextSupportingTextFalseStateDe3";
import TableCell from "../TableCell";
import StyleProgressBarSupportingTextTrueS from "../StyleProgressBarSupportingTextTrueS";
import TextFalseCheckboxFalseColorWhite from "../TextFalseCheckboxFalseColorWhite";
import StyleActionIconsSupportingTextFalse from "../StyleActionIconsSupportingTextFalse";
import styled from "styled-components";
import { Border1pxGallery } from "../../styledMixins";
import "./Dashboard4Share.css";

class Dashboard4Share extends React.Component {
  render() {
    const {
      divider,
      shareProject,
      content2Props,
      currentTrueBadgeFalseToggleFalseIco,
      currentFalseBadgeFalseToggleFalseIc,
      content4Props,
      breadcrumbsFalseSupportingTextTrueS,
      supportingTextFalseStyleSimpleActio,
      textTrueCheckboxFalseColorWhite1Pro,
      styleTextSupportingTextTrueStateDef,
      styleTextSupportingTextTrueStateDef2,
      styleTextSupportingTextTrueStateDef3,
      styleTextSupportingTextTrueStateDef4,
      styleTextSupportingTextTrueStateDef5,
      styleTextSupportingTextTrueStateDef6,
      styleTextSupportingTextTrueStateDef7,
      textTrueCheckboxFalseColorWhite2Pro,
      styleTextSupportingTextFalseStateDe,
      styleTextSupportingTextFalseStateDe2,
      styleTextSupportingTextFalseStateDe3,
      styleTextSupportingTextFalseStateDe4,
      styleTextSupportingTextFalseStateDe5,
      textTrueCheckboxFalseColorWhite3Pro,
      styleTextSupportingTextFalseStateDe6,
      styleTextSupportingTextFalseStateDe7,
      styleTextSupportingTextFalseStateDe8,
      styleTextSupportingTextFalseStateDe9,
      styleTextSupportingTextFalseStateDe10,
      styleTextSupportingTextFalseStateDe11,
      styleTextSupportingTextFalseStateDe12,
      textTrueCheckboxFalseColorWhite4Pro,
      tableCell1Props,
      tableCell2Props,
      tableCell3Props,
      tableCell4Props,
      tableCell5Props,
      tableCell6Props,
      tableCell7Props,
      textTrueCheckboxFalseColorWhite5Pro,
      styleTextSupportingTextFalseStateDe13,
      styleTextSupportingTextFalseStateDe14,
      styleTextSupportingTextFalseStateDe15,
      styleTextSupportingTextFalseStateDe16,
      styleTextSupportingTextFalseStateDe17,
      styleTextSupportingTextFalseStateDe18,
      textTrueCheckboxFalseColorWhite6Pro,
      styleTextSupportingTextFalseStateDe19,
      styleTextSupportingTextFalseStateDe20,
      styleTextSupportingTextFalseStateDe21,
      styleTextSupportingTextFalseStateDe22,
      styleTextSupportingTextFalseStateDe23,
      styleTextSupportingTextFalseStateDe24,
      styleTextSupportingTextFalseStateDe25,
      textFalseCheckboxFalseColorWhite1Pr,
      styleActionIconsSupportingTextFalse,
      textFalseCheckboxFalseColorWhite2Pr,
      styleActionIconsSupportingTextFalse2,
      textFalseCheckboxFalseColorWhite3Pr,
      styleActionIconsSupportingTextFalse3,
      textFalseCheckboxFalseColorWhite4Pr,
      styleActionIconsSupportingTextFalse4,
      textFalseCheckboxFalseColorWhite5Pr,
      styleActionIconsSupportingTextFalse5,
      textFalseCheckboxFalseColorWhite6Pr,
      styleActionIconsSupportingTextFalse6,
      textFalseCheckboxFalseColorWhite7Pr,
      styleActionIconsSupportingTextFalse7,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard-4-share screen">
          <OverlapGroup1>
            <HeaderNavigation>
              <Container>
                <Content>
                  <Content2 companyLogoProps={content2Props.companyLogoProps} />
                  <Navigation>
                    <CurrentTrueBadgeFalseToggleFalseIco className={currentTrueBadgeFalseToggleFalseIco.className}>
                      {currentTrueBadgeFalseToggleFalseIco.children}
                    </CurrentTrueBadgeFalseToggleFalseIco>
                    <CurrentFalseBadgeFalseToggleFalseIc className={currentFalseBadgeFalseToggleFalseIc.className} />
                  </Navigation>
                </Content>
                <Content4 typeAvatarOpenFalseProps={content4Props.typeAvatarOpenFalseProps} />
              </Container>
              <Divider src={divider} />
            </HeaderNavigation>
            <Main>
              <Section>
                <Container1>
                  <Sections>
                    <BreadcrumbsFalseSupportingTextTrueS2
                      text={breadcrumbsFalseSupportingTextTrueS.text}
                      text2Props={breadcrumbsFalseSupportingTextTrueS.text2Props}
                      sizemdHierarchyPrimaryIconFalseDest={
                        breadcrumbsFalseSupportingTextTrueS.sizemdHierarchyPrimaryIconFalseDest
                      }
                    />
                    <Section1>
                      <Container2>
                        <Table>
                          <SupportingTextFalseStyleSimpleActio
                            text={supportingTextFalseStyleSimpleActio.text}
                            sizesmIconFalseColorPrimaryProps={
                              supportingTextFalseStyleSimpleActio.sizesmIconFalseColorPrimaryProps
                            }
                            sizemdHierarchySecondaryGrayIconLea={
                              supportingTextFalseStyleSimpleActio.sizemdHierarchySecondaryGrayIconLea
                            }
                          />
                          <FiltersBar></FiltersBar>
                          <Content1>
                            <Column>
                              <TextTrueCheckboxFalseColorWhite
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite1Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef.text}
                                supportingText={styleTextSupportingTextTrueStateDef.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef2.text}
                                supportingText={styleTextSupportingTextTrueStateDef2.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef3.text}
                                supportingText={styleTextSupportingTextTrueStateDef3.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef4.text}
                                supportingText={styleTextSupportingTextTrueStateDef4.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef5.text}
                                supportingText={styleTextSupportingTextTrueStateDef5.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef6.text}
                                supportingText={styleTextSupportingTextTrueStateDef6.supportingText}
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextTrueStateDef
                                text={styleTextSupportingTextTrueStateDef7.text}
                                supportingText={styleTextSupportingTextTrueStateDef7.supportingText}
                              />
                            </Column>
                            <Column1>
                              <TextTrueCheckboxFalseColorWhite
                                className={textTrueCheckboxFalseColorWhite2Pro.className}
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite2Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe>
                                {styleTextSupportingTextFalseStateDe.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe2 />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe2 />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe>
                                {styleTextSupportingTextFalseStateDe2.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe3>
                                {styleTextSupportingTextFalseStateDe3.children}
                              </StyleTextSupportingTextFalseStateDe3>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe>
                                {styleTextSupportingTextFalseStateDe4.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe>
                                {styleTextSupportingTextFalseStateDe5.children}
                              </StyleTextSupportingTextFalseStateDe>
                            </Column1>
                            <Column2>
                              <TextTrueCheckboxFalseColorWhite
                                className={textTrueCheckboxFalseColorWhite3Pro.className}
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite3Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe6.className}
                              >
                                {styleTextSupportingTextFalseStateDe6.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe7.className}
                              >
                                {styleTextSupportingTextFalseStateDe7.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe3
                                className={styleTextSupportingTextFalseStateDe8.className}
                              >
                                {styleTextSupportingTextFalseStateDe8.children}
                              </StyleTextSupportingTextFalseStateDe3>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe9.className}
                              >
                                {styleTextSupportingTextFalseStateDe9.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe10.className}
                              >
                                {styleTextSupportingTextFalseStateDe10.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe11.className}
                              >
                                {styleTextSupportingTextFalseStateDe11.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe12.className}
                              >
                                {styleTextSupportingTextFalseStateDe12.children}
                              </StyleTextSupportingTextFalseStateDe>
                            </Column2>
                            <Column3>
                              <TextTrueCheckboxFalseColorWhite
                                className={textTrueCheckboxFalseColorWhite4Pro.className}
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite4Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell1Props.text}
                                socialIconProps={tableCell1Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell2Props.text}
                                className={tableCell2Props.className}
                                socialIconProps={tableCell2Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell3Props.text}
                                className={tableCell3Props.className}
                                socialIconProps={tableCell3Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell4Props.text}
                                socialIconProps={tableCell4Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell5Props.text}
                                socialIconProps={tableCell5Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell6Props.text}
                                socialIconProps={tableCell6Props.socialIconProps}
                              />
                              <Divider1></Divider1>
                              <TableCell
                                text={tableCell7Props.text}
                                socialIconProps={tableCell7Props.socialIconProps}
                              />
                            </Column3>
                            <Column4>
                              <TextTrueCheckboxFalseColorWhite
                                className={textTrueCheckboxFalseColorWhite5Pro.className}
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite5Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe13.className}
                              >
                                {styleTextSupportingTextFalseStateDe13.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe14.className}
                              >
                                {styleTextSupportingTextFalseStateDe14.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleProgressBarSupportingTextTrueS />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe15.className}
                              >
                                {styleTextSupportingTextFalseStateDe15.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe16.className}
                              >
                                {styleTextSupportingTextFalseStateDe16.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe17.className}
                              >
                                {styleTextSupportingTextFalseStateDe17.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe18.className}
                              >
                                {styleTextSupportingTextFalseStateDe18.children}
                              </StyleTextSupportingTextFalseStateDe>
                            </Column4>
                            <Column5>
                              <TextTrueCheckboxFalseColorWhite
                                className={textTrueCheckboxFalseColorWhite6Pro.className}
                                helpIconFalseArrowFalseStateDefault={
                                  textTrueCheckboxFalseColorWhite6Pro.helpIconFalseArrowFalseStateDefault
                                }
                              />
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe19.className}
                              >
                                {styleTextSupportingTextFalseStateDe19.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe20.className}
                              >
                                {styleTextSupportingTextFalseStateDe20.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe21.className}
                              >
                                {styleTextSupportingTextFalseStateDe21.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe22.className}
                              >
                                {styleTextSupportingTextFalseStateDe22.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe23.className}
                              >
                                {styleTextSupportingTextFalseStateDe23.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe24.className}
                              >
                                {styleTextSupportingTextFalseStateDe24.children}
                              </StyleTextSupportingTextFalseStateDe>
                              <Divider1></Divider1>
                              <StyleTextSupportingTextFalseStateDe
                                className={styleTextSupportingTextFalseStateDe25.className}
                              >
                                {styleTextSupportingTextFalseStateDe25.children}
                              </StyleTextSupportingTextFalseStateDe>
                            </Column5>
                            <Column6>
                              <TextFalseCheckboxFalseColorWhite />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite1Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite2Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse2.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite3Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse3.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite4Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse4.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite5Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse5.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite6Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse6.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                              <TextFalseCheckboxFalseColorWhite
                                className={textFalseCheckboxFalseColorWhite7Pr.className}
                              />
                              <StyleActionIconsSupportingTextFalse
                                sizemdHierarchyTertiaryGrayIconOnly={
                                  styleActionIconsSupportingTextFalse7.sizemdHierarchyTertiaryGrayIconOnly
                                }
                              />
                            </Column6>
                          </Content1>
                        </Table>
                      </Container2>
                    </Section1>
                  </Sections>
                </Container1>
              </Section>
            </Main>
            <Modal>
              <ShareProject src={shareProject} />
            </Modal>
          </OverlapGroup1>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 1728px;
  height: 950px;
  position: relative;
  margin-top: -4px;
`;

const HeaderNavigation = styled.div`
  position: absolute;
  width: 1728px;
  height: 73px;
  top: 4px;
  left: 0;
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

const Content = styled.div`
  margin-top: 16px;
  width: 362px;
  position: relative;
  margin-left: 32px;
  display: flex;
`;

const Navigation = styled.div`
  width: 199px;
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
  position: absolute;
  width: 1728px;
  height: 870px;
  top: 77px;
  left: 0;
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
  height: 726px;
  margin-left: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section1 = styled.div`
  width: 1216px;
  margin-top: 24px;
  display: flex;
`;

const Container2 = styled.div`
  width: 1280px;
  margin-left: -32px;
  display: flex;
`;

const Table = styled.div`
  ${Border1pxGallery}
  width: 1216px;
  height: 636px;
  margin-left: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
`;

const FiltersBar = styled.div`
  height: 1px;
  background-color: var(--white);
`;

const Content1 = styled.div`
  width: 1216px;
  display: flex;
  background-color: var(--white);
`;

const Column = styled.div`
  width: 381px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Column1 = styled.div`
  width: 97px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Column2 = styled.div`
  width: 137px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Column3 = styled.div`
  width: 165px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Column4 = styled.div`
  width: 131px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Column5 = styled.div`
  width: 152px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Column6 = styled.div`
  width: 72px;
  height: 555px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Modal = styled.div`
  position: absolute;
  width: 1728px;
  height: 950px;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--oxford-blue-2);
  backdrop-filter: blur(16px) brightness(100%);
  -webkit-backdrop-filter: blur(16px) brightness(100%);
`;

const ShareProject = styled.img`
  margin-top: 272px;
  width: 548.1201171875px;
  height: 405.36865234375px;
  margin-left: 589px;
`;

export default Dashboard4Share;
