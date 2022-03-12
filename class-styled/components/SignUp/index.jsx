import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
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
      <div className="sign-up screen">
        <Content>
          <Header>
            <Frame4 />
            <TextAndSupportingText>
              <Text>{text1}</Text>
              <SupportingText>{supportingText}</SupportingText>
            </TextAndSupportingText>
          </Header>
          <form>
            <Form>
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
              <TypeDefaultLeadingIconFalseLabelTru3
                typeDefaultDestructiveFalse3Props={
                  typeDefaultLeadingIconFalseLabelTru3.typeDefaultDestructiveFalse3Props
                }
              />
            </Form>
            <Actions>
              <SizelgHierarchyPrimaryIconFalseDest>
                {sizelgHierarchyPrimaryIconFalseDest.children}
              </SizelgHierarchyPrimaryIconFalseDest>
              <StyleButtonsThemeColorWithBrand
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrandProp.socialGoogleSupportingTextTrueTheme
                }
              />
            </Actions>
          </form>
          <Row>
            <Text1>{text2}</Text1>
            <SizemdHierarchyLinkColorIconFalseDe
              className={sizemdHierarchyLinkColorIconFalseDe.className}
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-top: 96px;
  width: 440px;
  height: 718px;
  margin-left: 644px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 166px;
`;

const TextAndSupportingText = styled.div`
  width: 440px;
  height: 98px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterSemiBoldMirage30px}
  height: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  margin-left: 59.5px;
  width: 321px;
  height: 48px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
`;

const Content1 = styled.div`
  height: 468px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 2px 4px #1018280f, 0px 4px 8px #1018281a;
`;

const Form = styled.div`
  margin-left: 40px;
  width: 360px;
  height: 276px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  margin-left: 40px;
  width: 360px;
  height: 104px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 440px;
  position: relative;
  margin-top: 32px;
  display: flex;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  width: 171px;
  height: 20px;
  margin-left: 112px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SignUp;
