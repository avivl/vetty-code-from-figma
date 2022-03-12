import React from "react";
import SizexlColorSuccessThemeLightCircleO from "../SizexlColorSuccessThemeLightCircleO";
import TextAndSupportingText32 from "../TextAndSupportingText32";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import styled from "styled-components";
import "./ForgotPassword4.css";

class ForgotPassword4 extends React.Component {
  render() {
    const {
      sizexlColorSuccessThemeLightCircleO,
      textAndSupportingText32Props,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-4 screen">
        <Content>
          <Header>
            <SizexlColorSuccessThemeLightCircleO src={sizexlColorSuccessThemeLightCircleO.src} />
            <TextAndSupportingText32
              text={textAndSupportingText32Props.text}
              supportingText={textAndSupportingText32Props.supportingText}
              className={textAndSupportingText32Props.className}
            />
          </Header>
          <SizelgHierarchyPrimaryIconFalseDest2
            className={sizelgHierarchyPrimaryIconFalseDest.className}
            sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
          />
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
  height: 306px;
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

export default ForgotPassword4;
