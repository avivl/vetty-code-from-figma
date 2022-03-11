import React from "react";
import SizexlColorSuccessThemeLightCircleO from "../SizexlColorSuccessThemeLightCircleO";
import TextAndSupportingText3 from "../TextAndSupportingText3";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import styled from "styled-components";
import "./ForgotPassword4.css";

class ForgotPassword4 extends React.Component {
  render() {
    const {
      sizexlColorSuccessThemeLightCircleO,
      textAndSupportingText3Props,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="forgot-password-4 screen">
          <Header>
            <SizexlColorSuccessThemeLightCircleO src={sizexlColorSuccessThemeLightCircleO.src} />
            <TextAndSupportingText3
              text={textAndSupportingText3Props.text}
              supportingText={textAndSupportingText3Props.supportingText}
              className={textAndSupportingText3Props.className}
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

export default ForgotPassword4;
