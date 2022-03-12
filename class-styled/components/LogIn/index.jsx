import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
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
      frame4Props,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      checkedFalseIndeterminateFalseSizes,
      sizemdHierarchyLinkColorIconFalseDe,
      sizelgHierarchyPrimaryIconFalseDest,
      styleButtonsThemeColorWithBrand2Pro,
      sizemdHierarchyLinkColorIconFalseDe2,
    } = this.props;

    return (
      <div className="log-in screen">
        <Content>
          <Header>
            <Frame4 className={frame4Props.className} />
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
          </form>
          <Row1>
            <Text1>{text2}</Text1>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe2.className}
              sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe2.sizemdIconFalseProps}
            />
          </Row1>
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-top: 96px;
  width: 440px;
  height: 622px;
  margin-left: 644px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 142px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TextAndSupportingText = styled.div`
  width: 440px;
  height: 74px;
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
  height: 24px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Content1 = styled.div`
  height: 396px;
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
  height: 160px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin-left: 40px;
  width: 360px;
  height: 20px;
  position: relative;
  margin-top: 24px;
  display: flex;
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

const Row1 = styled.div`
  width: 440px;
  position: relative;
  margin-top: 32px;
  display: flex;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  width: 155px;
  height: 20px;
  margin-left: 115px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default LogIn;
