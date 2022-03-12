import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword3.sass";

class ForgotPassword3 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-3 screen">
        <div className="content-100">
          <Header
            className={headerProps.className}
            sizexlColorPrimaryThemeLightCircleO={headerProps.sizexlColorPrimaryThemeLightCircleO}
            textAndSupportingText3Props={headerProps.textAndSupportingText3Props}
          />
          <div className="content-101">
            <div className="form-3">
              <TypeDefaultLeadingIconFalseLabelTru3
                className={typeDefaultLeadingIconFalseLabelTru.className}
                typeDefaultDestructiveFalse3Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse3Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru2
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse2Props
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

export default ForgotPassword3;
