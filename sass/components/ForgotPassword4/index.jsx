import React from "react";
import SizexlColorSuccessThemeLightCircleO from "../SizexlColorSuccessThemeLightCircleO";
import TextAndSupportingText from "../TextAndSupportingText";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword4.sass";

class ForgotPassword4 extends React.Component {
  render() {
    const {
      textAndSupportingTextProps,
      sizelgHierarchyPrimaryIconFalseDest2Props,
      sizemdHierarchyLinkGrayIconLeadingDProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="forgot-password-4 screen">
          <div className="header-6">
            <SizexlColorSuccessThemeLightCircleO />
            <TextAndSupportingText
              text={textAndSupportingTextProps.text}
              supportingText={textAndSupportingTextProps.supportingText}
              className={textAndSupportingTextProps.className}
            />
          </div>
          <SizelgHierarchyPrimaryIconFalseDest2
            className={sizelgHierarchyPrimaryIconFalseDest2Props.className}
            sizelgIconFalse3Props={sizelgHierarchyPrimaryIconFalseDest2Props.sizelgIconFalse3Props}
          />
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingDProps.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingDProps.sizemdIconLeading3Props}
          />
        </div>
      </div>
    );
  }
}

export default ForgotPassword4;
