import React from "react";
import CompanyLogo from "../CompanyLogo";
import OpenedFalseColorGrayThemeLightState from "../OpenedFalseColorGrayThemeLightState";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import SizesmIconLeading from "../SizesmIconLeading";
import StateDefault from "../StateDefault";
import Section3 from "../Section3";
import ShareProject from "../ShareProject";
import Frame140692 from "../Frame140692";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import Frame33765 from "../Frame33765";
import DestructiveFalse22 from "../DestructiveFalse22";
import Footer2 from "../Footer2";
import styled from "styled-components";
import { InterMediumMirage24px } from "../../styledMixins";
import "./PublicWebPageHRView2.css";

class PublicWebPageHRView2 extends React.Component {
  render() {
    const {
      text,
      companyLogoProps,
      openedFalseColorGrayThemeLightState,
      sizemdHierarchyLinkGrayIconLeadingD,
      sizesmIconLeadingProps,
      stateDefaultProps,
      section3Props,
      shareProjectProps,
      frame140692Props,
      supportingTextFalseTabsFalseActions,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextDestructiveFalse2Pro,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      destructiveFalse221Props,
      destructiveFalse222Props,
      destructiveFalse223Props,
      footer2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-hr-view screen">
          <HeaderNavigation>
            <Content>
              <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
              <OpenedFalseColorGrayThemeLightState
                socialIconProps={openedFalseColorGrayThemeLightState.socialIconProps}
              />
            </Content>
            <Divider src="/img/divider-2@2x.svg" />
          </HeaderNavigation>
          <Main>
            <PageHeader>
              <Content1>
                <SizemdHierarchyLinkGrayIconLeadingD
                  sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
                />
                <Text>{text}</Text>
              </Content1>
              <Actions>
                <SizesmIconLeading className={sizesmIconLeadingProps.className} />
                <StateDefault
                  className={stateDefaultProps.className}
                  sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
                />
              </Actions>
            </PageHeader>
            <Section3 supportingTextFalseTabsFalseActions={section3Props.supportingTextFalseTabsFalseActions} />
            <Section>
              <Container>
                <ShareProject1 src="/img/share-project-1@2x.svg" />
                <ShareProject
                  row521Props={shareProjectProps.row521Props}
                  property1AmenitiesProperty2False21P={shareProjectProps.property1AmenitiesProperty2False21P}
                  property1AmenitiesProperty2False22P={shareProjectProps.property1AmenitiesProperty2False22P}
                  property1AmenitiesProperty2False23P={shareProjectProps.property1AmenitiesProperty2False23P}
                  row522Props={shareProjectProps.row522Props}
                />
              </Container>
              <Frame33760>
                <Frame140692
                  preferenceAgencyProps={frame140692Props.preferenceAgencyProps}
                  content2Props={frame140692Props.content2Props}
                />
                <SupportingTextFalseTabsFalseActions className={supportingTextFalseTabsFalseActions.className}>
                  {supportingTextFalseTabsFalseActions.children}
                </SupportingTextFalseTabsFalseActions>
                <Frame33762>
                  <TypeDefaultLeadingIconFalseLabelTru2
                    typeDefaultDestructiveFalse2Props={
                      typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
                    }
                  />
                  <TypeDefaultLeadingIconFalseLabelTru2
                    className={typeDefaultLeadingIconFalseLabelTru2.className}
                    typeDefaultDestructiveFalse2Props={
                      typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse2Props
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <TypeLeadingTextDestructiveFalse2
                    className={typeLeadingTextDestructiveFalse2Pro.className}
                    typeLeadingTextDestructiveFalseProp={
                      typeLeadingTextDestructiveFalse2Pro.typeLeadingTextDestructiveFalseProp
                    }
                  />
                  <StateDefaultTypeDefaultSupportingTe
                    className={stateDefaultTypeDefaultSupportingTe.className}
                    labelTrueTypeDefaultStateDefaultPro={
                      stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefaultPro
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti2.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti2.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <StatePlaceholderTypeDefaultSupporti
                    className={statePlaceholderTypeDefaultSupporti3.className}
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti3.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <Frame33765 />
                  <DestructiveFalse22 input2Props={destructiveFalse221Props.input2Props} />
                  <DestructiveFalse22 input2Props={destructiveFalse222Props.input2Props} />
                  <DestructiveFalse22 input2Props={destructiveFalse223Props.input2Props} />
                </Frame33762>
                <Footer2 stateDefaultProps={footer2Props.stateDefaultProps} />
              </Frame33760>
            </Section>
          </Main>
        </div>
      </div>
    );
  }
}

const HeaderNavigation = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 64px;
  background-color: var(--white);
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
`;

const Content = styled.div`
  height: 63px;
  position: relative;
  display: flex;
  padding: 0 8px;
  justify-content: flex-end;
  align-items: center;
  min-width: 375px;
`;

const Divider = styled.img`
  width: 375px;
  height: 1px;
`;

const Main = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 4986px;
  background-color: var(--white);
`;

const PageHeader = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
`;

const Content1 = styled.div`
  width: 343px;
  position: relative;
  align-self: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 104px;
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  width: 343px;
  min-height: 64px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: 32px;
`;

const Actions = styled.div`
  height: 40px;
  position: relative;
  margin-top: 16px;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 270px;
`;

const Section = styled.div`
  width: 375px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 2129px;
`;

const Container = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 510px;
`;

const ShareProject1 = styled.img`
  width: 343px;
  height: 266px;
`;

const Frame33760 = styled.div`
  width: 347px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1652px;
`;

const Frame33762 = styled.div`
  width: 346px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1286px;
`;

export default PublicWebPageHRView2;
