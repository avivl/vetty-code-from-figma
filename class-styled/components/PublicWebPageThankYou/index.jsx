import React from "react";
import Content10 from "../Content10";
import Heading from "../Heading";
import Section32 from "../Section32";
import Frame14069 from "../Frame14069";
import Frame14015 from "../Frame14015";
import Frame14016 from "../Frame14016";
import Frame14017 from "../Frame14017";
import ApplicantDetails from "../ApplicantDetails";
import Footer from "../Footer";
import TypeHorizontalFillContainerActions2 from "../TypeHorizontalFillContainerActions2";
import styled from "styled-components";
import { InterMediumMirage18px, InterNormalPaleSky14px } from "../../styledMixins";
import "./PublicWebPageThankYou.css";

class PublicWebPageThankYou extends React.Component {
  render() {
    const {
      divider,
      group75,
      element,
      text,
      supportingText,
      graphics,
      content10Props,
      headingProps,
      section32Props,
      frame14069Props,
      frame14015Props,
      frame14016Props,
      frame14017Props,
      applicantDetailsProps,
      footerProps,
      typeHorizontalFillContainerActions2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="public-web-page-thank-you screen">
          <OverlapGroup1>
            <HeaderNavigation>
              <Container>
                <Content10 className={content10Props.className} content2Props={content10Props.content2Props} />
              </Container>
              <Divider src={divider} />
            </HeaderNavigation>
            <Container1>
              <Content>
                <Heading
                  textAndSupportingText3Props={headingProps.textAndSupportingText3Props}
                  stateDefaultProps={headingProps.stateDefaultProps}
                />
                <Divider1></Divider1>
              </Content>
            </Container1>
            <Section32
              className={section32Props.className}
              row51Props={section32Props.row51Props}
              property1AmenitiesProperty2False1Pr={section32Props.property1AmenitiesProperty2False1Pr}
              property1AmenitiesProperty2False2Pr={section32Props.property1AmenitiesProperty2False2Pr}
              property1AmenitiesProperty2False3Pr={section32Props.property1AmenitiesProperty2False3Pr}
              row52Props={section32Props.row52Props}
            />
            <Frame14069
              className={frame14069Props.className}
              preferenceAgencyProps={frame14069Props.preferenceAgencyProps}
              uButtonsIconOutlineRestingProps={frame14069Props.uButtonsIconOutlineRestingProps}
              content7Props={frame14069Props.content7Props}
            />
            <Frame140691>
              <Frame14015
                supportingTextTrueTabsFalseActionsF={frame14015Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14015Props.sectionProps}
                section22Props={frame14015Props.section22Props}
              />
              <Frame14016
                supportingTextTrueTabsFalseActionsF={frame14016Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14016Props.sectionProps}
                section22Props={frame14016Props.section22Props}
              />
              <Frame14017
                supportingTextTrueTabsFalseActionsF={frame14017Props.supportingTextTrueTabsFalseActionsF}
                sectionProps={frame14017Props.sectionProps}
              />
              <ApplicantDetails {...applicantDetailsProps} />
              <Footer stateDefaultProps={footerProps.stateDefaultProps} />
            </Frame140691>
            <Group75 src={group75} />
            <Modal>
              <Modal1>
                <Content1>
                  <Element src={element} />
                  <TextAndSupportingText>
                    <Text>{text}</Text>
                    <SupportingText>{supportingText}</SupportingText>
                  </TextAndSupportingText>
                </Content1>
                <TypeHorizontalFillContainerActions2
                  sizelgHierarchySecondaryGrayIconFal={
                    typeHorizontalFillContainerActions2.sizelgHierarchySecondaryGrayIconFal
                  }
                />
              </Modal1>
            </Modal>
          </OverlapGroup1>
          <Graphics src={graphics} />
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 1851px;
  height: 2825px;
  position: relative;
  margin-left: -123px;
`;

const HeaderNavigation = styled.div`
  position: absolute;
  width: 1728px;
  height: 73px;
  top: 0;
  left: 123px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Container = styled.div`
  margin-left: 183.5px;
  width: 1361px;
  height: 72px;
  position: relative;
  display: flex;
`;

const Divider = styled.img`
  width: 1728px;
  height: 1px;
`;

const Container1 = styled.div`
  position: absolute;
  width: 1361px;
  height: 91px;
  top: 83px;
  left: 307px;
  display: flex;
`;

const Content = styled.div`
  width: 1297px;
  margin-left: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 91px;
`;

const Divider1 = styled.div`
  width: 1297px;
  height: 1px;
  margin-top: 10px;
  background-color: var(--gallery);
`;

const Frame140691 = styled.div`
  position: absolute;
  width: 906px;
  height: 2611px;
  top: 214px;
  left: 339px;
  display: flex;
  flex-direction: column;
`;

const Group75 = styled.img`
  position: absolute;
  width: 135px;
  height: 367px;
  top: 211px;
  left: 0;
`;

const Modal = styled.div`
  position: absolute;
  width: 1728px;
  height: 950px;
  top: 0;
  left: 123px;
  display: flex;
  background-color: var(--oxford-blue-2);
  backdrop-filter: blur(16px) brightness(100%);
  -webkit-backdrop-filter: blur(16px) brightness(100%);
`;

const Modal1 = styled.div`
  margin-top: 324px;
  width: 423px;
  height: 302px;
  margin-left: 652.5px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 8px 8px #1018280a, 0px 20px 24px #1018281a;
`;

const Content1 = styled.div`
  margin-left: 24px;
  width: 375px;
  height: 178px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Element = styled.img`
  margin-left: 152.5px;
  width: 70px;
  height: 84.5px;
  margin-top: -1.2px;
`;

const TextAndSupportingText = styled.div`
  height: 76px;
  margin-top: 18.8px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  width: 375px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky14px}
  width: 375px;
  height: 40px;
  margin-top: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
`;

const Graphics = styled.img`
  width: 58px;
  height: 222px;
  margin-left: 24px;
  margin-top: 296.77px;
`;

export default PublicWebPageThankYou;
