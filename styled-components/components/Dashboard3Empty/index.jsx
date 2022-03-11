import React from "react";
import HeaderNavigation from "../HeaderNavigation";
import DividerChevronTypeTextBreakpointDes2 from "../DividerChevronTypeTextBreakpointDes2";
import BreadcrumbsFalseSupportingTextTrueS3 from "../BreadcrumbsFalseSupportingTextTrueS3";
import SupportingTextFalseStyleSimpleActio2 from "../SupportingTextFalseStyleSimpleActio2";
import TextTrueCheckboxFalseColorWhite from "../TextTrueCheckboxFalseColorWhite";
import styled from "styled-components";
import { InterMediumMirage18px, InterNormalPaleSky16px, Border1pxGallery } from "../../styledMixins";
import "./Dashboard3Empty.css";

class Dashboard3Empty extends React.Component {
  render() {
    const {
      text1,
      text2,
      headerNavigationProps,
      dividerChevronTypeTextBreakpointDes,
      breadcrumbsFalseSupportingTextTrueS,
      supportingTextFalseStyleSimpleActio,
      textTrueCheckboxFalseColorWhite1Pro,
      textTrueCheckboxFalseColorWhite2Pro,
      textTrueCheckboxFalseColorWhite3Pro,
      textTrueCheckboxFalseColorWhite4Pro,
      textTrueCheckboxFalseColorWhite5Pro,
      textTrueCheckboxFalseColorWhite6Pro,
      textTrueCheckboxFalseColorWhite7Pro,
      textTrueCheckboxFalseColorWhite8Pro,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard-3-empty screen">
          <HeaderNavigation
            companyLogoProps={headerNavigationProps.companyLogoProps}
            typeAvatarOpenFalseProps={headerNavigationProps.typeAvatarOpenFalseProps}
          />
          <Main>
            <DividerChevronTypeTextBreakpointDes2
              currentFalseTypeTextIconFalseStateD={
                dividerChevronTypeTextBreakpointDes.currentFalseTypeTextIconFalseStateD
              }
              currentFalseTypeTextIconFalseStateD2={
                dividerChevronTypeTextBreakpointDes.currentFalseTypeTextIconFalseStateD2
              }
              currentTrueTypeTextIconFalseStateDe={
                dividerChevronTypeTextBreakpointDes.currentTrueTypeTextIconFalseStateDe
              }
            />
            <BreadcrumbsFalseSupportingTextTrueS3
              sizemdHierarchySecondaryGrayIconLea={
                breadcrumbsFalseSupportingTextTrueS.sizemdHierarchySecondaryGrayIconLea
              }
            />
            <Table>
              <SupportingTextFalseStyleSimpleActio2
                sizesmIconFalseColorPrimaryProps={supportingTextFalseStyleSimpleActio.sizesmIconFalseColorPrimaryProps}
                sizemdHierarchySecondaryGrayIconLea={
                  supportingTextFalseStyleSimpleActio.sizemdHierarchySecondaryGrayIconLea
                }
              />
              <FiltersBar></FiltersBar>
              <Content>
                <Column>
                  <TextTrueCheckboxFalseColorWhite
                    className={textTrueCheckboxFalseColorWhite1Pro.className}
                    helpIconFalseArrowFalseStateDefault={
                      textTrueCheckboxFalseColorWhite1Pro.helpIconFalseArrowFalseStateDefault
                    }
                  />
                  <Divider></Divider>
                </Column>
                <OverlapGroup1>
                  <Column1>
                    <TextTrueCheckboxFalseColorWhite
                      className={textTrueCheckboxFalseColorWhite2Pro.className}
                      helpIconFalseArrowFalseStateDefault={
                        textTrueCheckboxFalseColorWhite2Pro.helpIconFalseArrowFalseStateDefault
                      }
                    />
                    <Divider1></Divider1>
                  </Column1>
                  <Column2>
                    <TextTrueCheckboxFalseColorWhite
                      className={textTrueCheckboxFalseColorWhite3Pro.className}
                      helpIconFalseArrowFalseStateDefault={
                        textTrueCheckboxFalseColorWhite3Pro.helpIconFalseArrowFalseStateDefault
                      }
                    />
                    <Divider2></Divider2>
                  </Column2>
                  <Column3>
                    <TextTrueCheckboxFalseColorWhite
                      className={textTrueCheckboxFalseColorWhite4Pro.className}
                      helpIconFalseArrowFalseStateDefault={
                        textTrueCheckboxFalseColorWhite4Pro.helpIconFalseArrowFalseStateDefault
                      }
                    />
                    <Divider3></Divider3>
                  </Column3>
                  <Column4>
                    <TextTrueCheckboxFalseColorWhite
                      className={textTrueCheckboxFalseColorWhite5Pro.className}
                      helpIconFalseArrowFalseStateDefault={
                        textTrueCheckboxFalseColorWhite5Pro.helpIconFalseArrowFalseStateDefault
                      }
                    />
                    <Divider4></Divider4>
                  </Column4>
                  <OverlapGroup>
                    <Column5>
                      <TextTrueCheckboxFalseColorWhite
                        className={textTrueCheckboxFalseColorWhite6Pro.className}
                        helpIconFalseArrowFalseStateDefault={
                          textTrueCheckboxFalseColorWhite6Pro.helpIconFalseArrowFalseStateDefault
                        }
                      />
                      <Divider5></Divider5>
                    </Column5>
                    <Frame33766>
                      <A1e5ce627f3fd3fb5e05d6ae03dde4bf1 src="/img/a1e5ce627f3fd3fb5e05d6ae03dde4bf-1@2x.svg" />
                      <Text>{text1}</Text>
                      <Text1>{text2}</Text1>
                    </Frame33766>
                  </OverlapGroup>
                </OverlapGroup1>
                <Column6>
                  <TextTrueCheckboxFalseColorWhite
                    className={textTrueCheckboxFalseColorWhite7Pro.className}
                    helpIconFalseArrowFalseStateDefault={
                      textTrueCheckboxFalseColorWhite7Pro.helpIconFalseArrowFalseStateDefault
                    }
                  />
                  <Divider6></Divider6>
                </Column6>
                <Column7>
                  <TextTrueCheckboxFalseColorWhite
                    className={textTrueCheckboxFalseColorWhite8Pro.className}
                    helpIconFalseArrowFalseStateDefault={
                      textTrueCheckboxFalseColorWhite8Pro.helpIconFalseArrowFalseStateDefault
                    }
                  />
                  <Divider7></Divider7>
                </Column7>
              </Content>
            </Table>
          </Main>
        </div>
      </div>
    );
  }
}

const Main = styled.div`
  width: 1728px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  align-items: center;
  min-height: 909px;
  background-color: var(--white);
`;

const Table = styled.div`
  ${Border1pxGallery}
  width: 1216px;
  height: 637px;
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

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1216px;
  background-color: var(--white);
`;

const Column = styled.div`
  width: 263px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider = styled.div`
  width: 263px;
  height: 1px;
  background-color: var(--gallery);
`;

const OverlapGroup1 = styled.div`
  width: 727px;
  height: 556px;
  position: relative;
`;

const Column1 = styled.div`
  position: absolute;
  width: 117px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider1 = styled.div`
  width: 117px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column2 = styled.div`
  position: absolute;
  width: 123px;
  top: 0;
  left: 117px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider2 = styled.div`
  width: 123px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column3 = styled.div`
  position: absolute;
  width: 161px;
  top: 0;
  left: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider3 = styled.div`
  width: 161px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column4 = styled.div`
  position: absolute;
  width: 177px;
  top: 0;
  left: 401px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider4 = styled.div`
  width: 177px;
  height: 1px;
  background-color: var(--gallery);
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 621px;
  height: 556px;
  top: 0;
  left: 106px;
`;

const Column5 = styled.div`
  position: absolute;
  width: 149px;
  top: 0;
  left: 472px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 556px;
`;

const Divider5 = styled.div`
  width: 149px;
  height: 1px;
  background-color: var(--gallery);
`;

const Frame33766 = styled.div`
  position: absolute;
  width: 478px;
  top: 127px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 296px;
`;

const A1e5ce627f3fd3fb5e05d6ae03dde4bf1 = styled.img`
  width: 300px;
  height: 200px;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  min-height: 28px;
  margin-top: 10px;
  min-width: 291px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Text1 = styled.p`
  ${InterNormalPaleSky16px}
  width: 478px;
  min-height: 48px;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
`;

const Column6 = styled.div`
  width: 118px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider6 = styled.div`
  width: 118px;
  height: 1px;
  background-color: var(--gallery);
`;

const Column7 = styled.div`
  width: 108px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const Divider7 = styled.div`
  width: 108px;
  height: 1px;
  background-color: var(--gallery);
`;

export default Dashboard3Empty;
