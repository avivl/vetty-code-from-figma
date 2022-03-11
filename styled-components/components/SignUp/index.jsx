import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import SizelgHierarchyPrimaryIconFalseDest from "../SizelgHierarchyPrimaryIconFalseDest";
import StyleButtonsThemeColorWithBrand from "../StyleButtonsThemeColorWithBrand";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterNormalPaleSky16px, InterSemiBoldMirage30px } from "../../styledMixins";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    const {
      text1,
      supportingText,
      text2,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      typeDefaultLeadingIconFalseLabelTru3,
      sizelgHierarchyPrimaryIconFalseDest,
      styleButtonsThemeColorWithBrandProp,
      sizemdHierarchyLinkColorIconFalseDe,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="sign-up screen">
          <Header>
            <Frame4 />
            <TextAndSupportingText>
              <Text>{text1}</Text>
              <SupportingText>{supportingText}</SupportingText>
            </TextAndSupportingText>
          </Header>
          <Content>
            <Form>
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru.className}
                typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps}
              />
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
              />
              <TypeDefaultLeadingIconFalseLabelTru3
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru3.typeDefaultDestructiveFalse2Props
                }
              />
            </Form>
            <Actions>
              <SizelgHierarchyPrimaryIconFalseDest
                sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
              />
              <StyleButtonsThemeColorWithBrand
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrandProp.socialGoogleSupportingTextTrueTheme
                }
              />
            </Actions>
          </Content>
          <Row>
            <Text1>{text2}</Text1>
            <SizemdHierarchyLinkColorIconFalseDe
              className={sizemdHierarchyLinkColorIconFalseDe.className}
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
          </Row>
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 166px;
`;

const TextAndSupportingText = styled.div`
  width: 440px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 98px;
`;

const Text = styled.div`
  ${InterSemiBoldMirage30px}
  width: 440px;
  min-height: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  width: 321px;
  min-height: 48px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
`;

const Content = styled.div`
  width: 440px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 468px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 2px 4px #1018280f, 0px 4px 8px #1018281a;
`;

const Form = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 276px;
`;

const Actions = styled.div`
  width: 360px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 104px;
`;

const Row = styled.div`
  height: 20px;
  position: relative;
  margin-top: 32px;
  display: flex;
  padding: 0 112px;
  align-items: flex-start;
  min-width: 440px;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  min-width: 171px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SignUp;
