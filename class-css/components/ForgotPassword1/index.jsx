import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword1.css";

class ForgotPassword1 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTru,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-1 screen">
        <div className="content-97">
          <Header
            sizexlColorPrimaryThemeLightCircleO={headerProps.sizexlColorPrimaryThemeLightCircleO}
            textAndSupportingText3Props={headerProps.textAndSupportingText3Props}
          />
          <div className="content-98">
            <div className="form-2">
              <TypeDefaultLeadingIconFalseLabelTru2
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
                }
              />
            </div>
            <SizelgHierarchyPrimaryIconFalseDest2
              className={sizelgHierarchyPrimaryIconFalseDest.className}
              sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
            />
          </div>
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingD.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
          />
        </div>
      </div>
    );
  }
}

export default ForgotPassword1;
