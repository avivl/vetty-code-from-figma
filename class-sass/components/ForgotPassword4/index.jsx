import React from "react";
import SizexlColorSuccessThemeLightCircleO from "../SizexlColorSuccessThemeLightCircleO";
import TextAndSupportingText32 from "../TextAndSupportingText32";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword4.sass";

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
        <div className="content-99">
          <div className="header-6">
            <SizexlColorSuccessThemeLightCircleO src={sizexlColorSuccessThemeLightCircleO.src} />
            <TextAndSupportingText32
              text={textAndSupportingText32Props.text}
              supportingText={textAndSupportingText32Props.supportingText}
              className={textAndSupportingText32Props.className}
            />
          </div>
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

export default ForgotPassword4;
