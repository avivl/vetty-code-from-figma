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
      <div className="container-center-horizontal">
        <div className="forgot-password-2 screen">
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
          <SizelgHierarchyPrimaryIconFalseDest2
            className={sizelgHierarchyPrimaryIconFalseDest.className}
            sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
          />
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
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 178px;
`;

const TextAndSupportingText = styled.div`
  width: 360px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 98px;
`;

const Text = styled.div`
  ${InterSemiBoldMirage30px}
  width: 360px;
  min-height: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  width: 360px;
  min-height: 48px;
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

const Row = styled.div`
  height: 20px;
  position: relative;
  margin-top: 32px;
  display: flex;
  padding: 0 46.5px;
  align-items: flex-start;
  min-width: 360px;
`;

const Text1 = styled.div`
  ${InterNormalPaleSky14px}
  min-height: 20px;
  min-width: 162px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default ForgotPassword2;
