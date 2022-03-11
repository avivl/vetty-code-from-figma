import React from "react";
import Content3 from "../Content3";
import SizemdHierarchySecondaryGrayIconFal from "../SizemdHierarchySecondaryGrayIconFal";
import Heading from "../Heading";
import Frame14015 from "../Frame14015";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import OpenedFalseTypeSingleDateStatePlace from "../OpenedFalseTypeSingleDateStatePlace";
import DestructiveFalse6 from "../DestructiveFalse6";
import Footer from "../Footer";
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import styled from "styled-components";
import { InterNormalOxfordBlue14px } from "../../styledMixins";
import "./PublicWebPageCandidateView2.css";

class PublicWebPageCandidateView2 extends React.Component {
  render() {
    const {
      label,
      content3Props,
      headingProps,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      supportingTextTrueTabsFalseActionsF,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextDestructiveFalse2Pro,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      destructiveFalse61Props,
      destructiveFalse62Props,
      destructiveFalse63Props,
      footerProps,
      section32Props,
      frame14069Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-candidate-view screen">
          <HeaderNavigation>
            <Container>
              <Content3 className={content3Props.className} frame3Props={content3Props.frame3Props} />
              <SizemdHierarchySecondaryGrayIconFal />
            </Container>
            <Divider src="/img/divider@1x.svg" />
          </HeaderNavigation>
          <Container1>
            <Heading className={headingProps.className} stateDefaultProps={headingProps.stateDefaultProps} />
            <Divider1></Divider1>
          </Container1>
          <FlexRow>
            <Group75 src="/img/group-75-1@2x.svg" />
            <Frame140691>
              <Frame14015 supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14016 supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF} />
              <Frame14017 supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF} />
              <ApplicantDetails>
                <SupportingTextTrueTabsFalseActionsF>
                  {supportingTextTrueTabsFalseActionsF.children}
                </SupportingTextTrueTabsFalseActionsF>
                <Frame33762>
                  <TypeDefaultLeadingIconFalseLabelTru
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps
                    }
                  />
                  <TypeDefaultLeadingIconFalseLabelTru
                    className={typeDefaultLeadingIconFalseLabelTru2.className}
                    typeDefaultDestructiveFalseProps={
                      typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps
                    }
                  />
                </Frame33762>
                <Frame33762>
                  <StatePlaceholderTypeDefaultSupporti
                    labelTrueTypeDefaultStatePlaceholde={
                      statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
                    }
                  />
                  <TypeLeadingTextDestructiveFalse2
                    typeLeadingTextDestructiveFalseProp={
                      typeLeadingTextDestructiveFalse2Pro.typeLeadingTextDestructiveFalseProp
                    }
                  />
                  <StateDefaultTypeDefaultSupportingTe
                    labelTrueTypeDefaultStateDefaultPro={
                      stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefaultPro
                    }
                  />
                </Frame33762>
                <Frame33762>
                  <StatePlaceholderTypeDefaultSupporti
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
                  <Frame33765>
                    <Label>{label}</Label>
                    <OpenedFalseTypeSingleDateStatePlace />
                  </Frame33765>
                </Frame33762>
                <DestructiveFalse6 inputProps={destructiveFalse61Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse62Props.inputProps} />
                <DestructiveFalse6 inputProps={destructiveFalse63Props.inputProps} />
              </ApplicantDetails>
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </Frame140691>
            <Frame33760>
              <Section32
                className={section32Props.className}
                row51Props={section32Props.row51Props}
                property1AmenitiesProperty2False1Pr={section32Props.property1AmenitiesProperty2False1Pr}
                property1AmenitiesProperty2False2Pr={section32Props.property1AmenitiesProperty2False2Pr}
                property1AmenitiesProperty2False3Pr={section32Props.property1AmenitiesProperty2False3Pr}
                row52Props={section32Props.row52Props}
              />
              <Frame14069
                preferenceAgencyProps={frame14069Props.preferenceAgencyProps}
                content2Props={frame14069Props.content2Props}
              />
            </Frame33760>
            <Graphics src="/img/graphics-3@2x.svg" />
          </FlexRow>
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
  min-width: 1361px;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

const Container1 = styled.div`
  width: 1361px;
  position: relative;
  align-self: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 51px;
`;

const Divider1 = styled.div`
  width: 1297px;
  height: 1px;
  margin-top: 10px;
  background-color: var(--gallery);
`;

const FlexRow = styled.div`
  height: 2611px;
  margin-top: 30px;
  margin-left: -123.01px;
  display: flex;
  align-items: flex-start;
  min-width: 1933px;
`;

const Group75 = styled.img`
  width: 135px;
  height: 367px;
  margin-top: 26.83px;
`;

const Frame140691 = styled.div`
  width: 905px;
  position: relative;
  margin-left: 204px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2611px;
`;

const ApplicantDetails = styled.div`
  width: 904px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 918px;
`;

const Frame33762 = styled.div`
  height: 70px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

const Frame33765 = styled.div`
  width: 136px;
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70px;
`;

const Label = styled.div`
  ${InterNormalOxfordBlue14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Frame33760 = styled.div`
  width: 360px;
  position: relative;
  margin-left: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 437px;
`;

const Graphics = styled.img`
  width: 58px;
  height: 222px;
  margin-left: 232px;
  margin-top: 112.77px;
`;

export default PublicWebPageCandidateView2;
