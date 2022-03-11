import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import CheckedFalseIndeterminateFalseSizes from "../CheckedFalseIndeterminateFalseSizes";
import SizemdHierarchyLinkColorIconFalseDe2 from "../SizemdHierarchyLinkColorIconFalseDe2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import StyleButtonsThemeColorWithBrand2 from "../StyleButtonsThemeColorWithBrand2";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterNormalPaleSky16px, InterSemiBoldMirage30px } from "../../styledMixins";
import "./LogIn.css";

class LogIn extends React.Component {
  render() {
    const {
      text1,
      supportingText,
      text2,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      checkedFalseIndeterminateFalseSizes,
      sizemdHierarchyLinkColorIconFalseDe,
      sizelgHierarchyPrimaryIconFalseDest,
      styleButtonsThemeColorWithBrand2Pro,
      sizemdHierarchyLinkColorIconFalseDe2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="log-in screen">
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
            </Form>
            <Row>
              <CheckedFalseIndeterminateFalseSizes text={checkedFalseIndeterminateFalseSizes.text} />
              <SizemdHierarchyLinkColorIconFalseDe2
                sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalseProps}
              />
            </Row>
            <Actions>
              <SizelgHierarchyPrimaryIconFalseDest2
                sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
              />
              <StyleButtonsThemeColorWithBrand2
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrand2Pro.socialGoogleSupportingTextTrueTheme
                }
              />
            </Actions>
          </Content>
          <Row1>
            <Text1>{text2}</Text1>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe2.className}
              sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe2.sizemdIconFalseProps}
            />
          </Row1>
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
  min-height: 142px;
`;

const TextAndSupportingText = styled.div`
  width: 440px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 74px;
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
  width: 440px;
  min-height: 24px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Content = styled.div`
  width: 440px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 396px;
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
  min-height: 160px;
`;

const Row = styled.div`
  height: 20px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 360px;
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

const Row1 = styled.div`
  height: 20px;
  position: relative;
  margin-top: 32px;
  display: flex;
  padding: 0 115px;
  align-items: flex-start;
  min-width: 440px;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  min-width: 155px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default LogIn;
