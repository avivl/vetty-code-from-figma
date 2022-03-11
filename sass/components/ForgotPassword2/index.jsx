import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkColorIconFalseDe2 from "../SizemdHierarchyLinkColorIconFalseDe2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import "./ForgotPassword2.sass";

class ForgotPassword2 extends React.Component {
  render() {
    const {
      text1,
      spanText1,
      spanText2,
      text2,
      sizelgHierarchyPrimaryIconFalseDest2Props,
      sizemdHierarchyLinkColorIconFalseDe2Props,
      sizemdHierarchyLinkGrayIconLeadingDProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="forgot-password-2 screen">
          <div className="header-3">
            <SizexlColorPrimaryThemeLightCircleO />
            <div className="text-and-supporting-text-6">
              <div className="text-115 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-11 inter-normal-pale-sky-16px">
                <span className="inter-normal-pale-sky-16px">{spanText1}</span>
                <span className="span1">{spanText2}</span>
              </p>
            </div>
          </div>
          <SizelgHierarchyPrimaryIconFalseDest2
            className={sizelgHierarchyPrimaryIconFalseDest2Props.className}
            sizelgIconFalse3Props={sizelgHierarchyPrimaryIconFalseDest2Props.sizelgIconFalse3Props}
          />
          <div className="row-10">
            <div className="text-116 inter-normal-pale-sky-14px">{text2}</div>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe2Props.className}
              sizemdIconFalse4Props={sizemdHierarchyLinkColorIconFalseDe2Props.sizemdIconFalse4Props}
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

export default ForgotPassword2;
