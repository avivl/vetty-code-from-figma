import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword3.sass";

class ForgotPassword3 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTru3Props,
      typeDefaultLeadingIconFalseLabelTruProps,
      sizelgHierarchyPrimaryIconFalseDest2Props,
      sizemdHierarchyLinkGrayIconLeadingDProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="forgot-password-3 screen">
          <Header
            className={headerProps.className}
            textAndSupportingTextProps={headerProps.textAndSupportingTextProps}
          />
          <div className="content-34">
            <div className="form-2">
              <TypeDefaultLeadingIconFalseLabelTru3
                className={typeDefaultLeadingIconFalseLabelTru3Props.className}
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru3Props.typeDefaultDestructiveFalse2Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTruProps.className}
                typeDefaultDestructiveFalseProps={
                  typeDefaultLeadingIconFalseLabelTruProps.typeDefaultDestructiveFalseProps
                }
              />
            </div>
            <SizelgHierarchyPrimaryIconFalseDest2
              className={sizelgHierarchyPrimaryIconFalseDest2Props.className}
              sizelgIconFalse3Props={sizelgHierarchyPrimaryIconFalseDest2Props.sizelgIconFalse3Props}
            />
          </div>
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingDProps.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingDProps.sizemdIconLeading3Props}
          />
        </div>
      </div>
    );
  }
}

export default ForgotPassword3;
