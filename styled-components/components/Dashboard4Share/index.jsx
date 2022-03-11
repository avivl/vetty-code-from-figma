import React from "react";
import CompanyLogo from "../CompanyLogo";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
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
      companyLogoProps,
      currentTrueBadgeFalseToggleFalseIco,
      currentFalseBadgeFalseToggleFalseIc,
      typeAvatarOpenFalseProps,
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
                  <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
                  <Navigation>
                    <CurrentTrueBadgeFalseToggleFalseIco className={currentTrueBadgeFalseToggleFalseIco.className}>
                      {currentTrueBadgeFalseToggleFalseIco.children}
                    </CurrentTrueBadgeFalseToggleFalseIco>
                    <CurrentFalseBadgeFalseToggleFalseIc className={currentFalseBadgeFalseToggleFalseIc.className} />
                  </Navigation>
                </Content>
                <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
              </Container>
              <Divider src="/img/divider@1x.svg" />
            </HeaderNavigation>
            <Main>
              <BreadcrumbsFalseSupportingTextTrueS2
                text={breadcrumbsFalseSupportingTextTrueS.text}
                supportingText={breadcrumbsFalseSupportingTextTrueS.supportingText}
                sizemdHierarchyPrimaryIconFalseDest={
                  breadcrumbsFalseSupportingTextTrueS.sizemdHierarchyPrimaryIconFalseDest
                }
              />
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
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe>
                      {styleTextSupportingTextFalseStateDe.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe2 />
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe2 />
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe>
                      {styleTextSupportingTextFalseStateDe2.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe3>
                      {styleTextSupportingTextFalseStateDe3.children}
                    </StyleTextSupportingTextFalseStateDe3>
                    <Divider2></Divider2>
                    <StyleTextSupportingTextFalseStateDe>
                      {styleTextSupportingTextFalseStateDe4.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider2></Divider2>
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
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe6.className}>
                      {styleTextSupportingTextFalseStateDe6.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe7.className}>
                      {styleTextSupportingTextFalseStateDe7.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe3 className={styleTextSupportingTextFalseStateDe8.className}>
                      {styleTextSupportingTextFalseStateDe8.children}
                    </StyleTextSupportingTextFalseStateDe3>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe9.className}>
                      {styleTextSupportingTextFalseStateDe9.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe10.className}>
                      {styleTextSupportingTextFalseStateDe10.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe11.className}>
                      {styleTextSupportingTextFalseStateDe11.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider3></Divider3>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe12.className}>
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
                    <Divider4></Divider4>
                    <TableCell text={tableCell1Props.text} socialIconProps={tableCell1Props.socialIconProps} />
                    <Divider4></Divider4>
                    <TableCell
                      text={tableCell2Props.text}
                      className={tableCell2Props.className}
                      socialIconProps={tableCell2Props.socialIconProps}
                    />
                    <Divider4></Divider4>
                    <TableCell
                      text={tableCell3Props.text}
                      className={tableCell3Props.className}
                      socialIconProps={tableCell3Props.socialIconProps}
                    />
                    <Divider4></Divider4>
                    <TableCell text={tableCell4Props.text} socialIconProps={tableCell4Props.socialIconProps} />
                    <Divider4></Divider4>
                    <TableCell text={tableCell5Props.text} socialIconProps={tableCell5Props.socialIconProps} />
                    <Divider4></Divider4>
                    <TableCell text={tableCell6Props.text} socialIconProps={tableCell6Props.socialIconProps} />
                    <Divider4></Divider4>
                    <TableCell text={tableCell7Props.text} socialIconProps={tableCell7Props.socialIconProps} />
                  </Column3>
                  <Column4>
                    <TextTrueCheckboxFalseColorWhite
                      className={textTrueCheckboxFalseColorWhite5Pro.className}
                      helpIconFalseArrowFalseStateDefault={
                        textTrueCheckboxFalseColorWhite5Pro.helpIconFalseArrowFalseStateDefault
                      }
                    />
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe13.className}>
                      {styleTextSupportingTextFalseStateDe13.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe14.className}>
                      {styleTextSupportingTextFalseStateDe14.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider5></Divider5>
                    <StyleProgressBarSupportingTextTrueS />
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe15.className}>
                      {styleTextSupportingTextFalseStateDe15.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe16.className}>
                      {styleTextSupportingTextFalseStateDe16.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe17.className}>
                      {styleTextSupportingTextFalseStateDe17.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider5></Divider5>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe18.className}>
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
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe19.className}>
                      {styleTextSupportingTextFalseStateDe19.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe20.className}>
                      {styleTextSupportingTextFalseStateDe20.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe21.className}>
                      {styleTextSupportingTextFalseStateDe21.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe22.className}>
                      {styleTextSupportingTextFalseStateDe22.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe23.className}>
                      {styleTextSupportingTextFalseStateDe23.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe24.className}>
                      {styleTextSupportingTextFalseStateDe24.children}
                    </StyleTextSupportingTextFalseStateDe>
                    <Divider6></Divider6>
                    <StyleTextSupportingTextFalseStateDe className={styleTextSupportingTextFalseStateDe25.className}>
                      {styleTextSupportingTextFalseStateDe25.children}
                    </StyleTextSupportingTextFalseStateDe>
                  </Column5>
                  <Column6>
                    <TextFalseCheckboxFalseColorWhite />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite1Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite2Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse2.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite3Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse3.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite4Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse4.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite5Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse5.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite6Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse6.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                    <TextFalseCheckboxFalseColorWhite className={textFalseCheckboxFalseColorWhite7Pr.className} />
                    <StyleActionIconsSupportingTextFalse
                      sizemdHierarchyTertiaryGrayIconOnly={
                        styleActionIconsSupportingTextFalse7.sizemdHierarchyTertiaryGrayIconOnly
                      }
                    />
                  </Column6>
                </Content1>
              </Table>
            </Main>
            <Modal>
              <ShareProject src="/img/share-project-3@1x.svg" />
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
  position: relative;
  display: flex;
  align-items: center;
  min-width: 362px;
`;

const Navigation = styled.div`
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 199px;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

const Main = styled.div`
  position: absolute;
  width: 1728px;
  top: 77px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  align-items: center;
  min-height: 870px;
  background-color: var(--white);
`;

const Table = styled.div`
  ${Border1pxGallery}
  width: 1216px;
  height: 636px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
`;

const FiltersBar = styled.div`
  width: 1216px;
  height: 1px;
  background-color: var(--white);
`;

const Content1 = styled.div`
  height: 555px;
  display: flex;
  align-items: flex-start;
  min-width: 1216px;
  background-color: var(--white);
`;

const Column = styled.div`
  width: 381px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider1 = styled.div`
  width: 381px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column1 = styled.div`
  width: 97px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider2 = styled.div`
  width: 97px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column2 = styled.div`
  width: 137px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider3 = styled.div`
  width: 137px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column3 = styled.div`
  width: 165px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider4 = styled.div`
  width: 165px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column4 = styled.div`
  width: 131px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider5 = styled.div`
  width: 131px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column5 = styled.div`
  width: 152px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Divider6 = styled.div`
  width: 152px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column6 = styled.div`
  width: 72px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 555px;
`;

const Modal = styled.div`
  position: absolute;
  height: 950px;
  top: 0;
  left: 0;
  display: flex;
  padding: 272px 589px;
  align-items: flex-start;
  min-width: 1728px;
  background-color: var(--oxford-blue-2);
  backdrop-filter: blur(16px) brightness(100%);
  -webkit-backdrop-filter: blur(16px) brightness(100%);
`;

const ShareProject = styled.img`
  width: 548px;
  height: 405px;
`;

export default Dashboard4Share;
