import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword1.sass";

class ForgotPassword1 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTruProps,
      sizelgHierarchyPrimaryIconFalseDest2Props,
      sizemdHierarchyLinkGrayIconLeadingDProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="forgot-password-1 screen">
          <Header textAndSupportingTextProps={headerProps.textAndSupportingTextProps} />
          <div className="content-33">
            <TypeDefaultLeadingIconFalseLabelTru
              className={typeDefaultLeadingIconFalseLabelTruProps.className}
              typeDefaultDestructiveFalseProps={
                typeDefaultLeadingIconFalseLabelTruProps.typeDefaultDestructiveFalseProps
              }
            />
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

export default ForgotPassword1;
