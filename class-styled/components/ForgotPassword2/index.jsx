import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkColorIconFalseDe2 from "../SizemdHierarchyLinkColorIconFalseDe2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import styled from "styled-components";
import { InterNormalPaleSky14px, InterNormalPaleSky16px, InterSemiBoldMirage30px } from "../../styledMixins";
import "./ForgotPassword2.css";

class ForgotPassword2 extends React.Component {
  render() {
    const {
      text1,
      spanText1,
      spanText2,
      text2,
      sizexlColorPrimaryThemeLightCircleO,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkColorIconFalseDe,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-2 screen">
        <Content>
          <Header>
            <SizexlColorPrimaryThemeLightCircleO src={sizexlColorPrimaryThemeLightCircleO.src} />
            <TextAndSupportingText>
              <Text>{text1}</Text>
              <SupportingText>
                <span className="inter-normal-pale-sky-16px">{spanText1}</span>
                <Span1>{spanText2}</Span1>
              </SupportingText>
            </TextAndSupportingText>
          </Header>
          <Content1>
            <SizelgHierarchyPrimaryIconFalseDest2
              sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
            />
          </Content1>
          <Row>
            <Text1>{text2}</Text1>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe.className}
              sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalseProps}
            />
          </Row>
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingD.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
          />
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-top: 96px;
  width: 360px;
  height: 358px;
  margin-left: 684px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 178px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TextAndSupportingText = styled.div`
  width: 360px;
  height: 98px;
  margin-top: 9px;
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
  height: 48px;
  margin-top: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
`;

const Span1 = styled.span`
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: var(--pale-sky);
  font-size: var(--font-size-m);
`;

const Content1 = styled.div`
  width: 360px;
  height: 44px;
  position: relative;
  margin-top: 32px;
  display: flex;
  border-radius: 12px;
`;

const Row = styled.div`
  width: 360px;
  position: relative;
  margin-top: 32px;
  display: flex;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  width: 162px;
  height: 20px;
  margin-left: 46.5px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default ForgotPassword2;
