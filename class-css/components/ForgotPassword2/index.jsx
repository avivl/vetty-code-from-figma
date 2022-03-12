import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkColorIconFalseDe2 from "../SizemdHierarchyLinkColorIconFalseDe2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
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
      <div className="forgot-password-2 screen">
        <div className="content-95">
          <div className="header-3">
            <SizexlColorPrimaryThemeLightCircleO src={sizexlColorPrimaryThemeLightCircleO.src} />
            <div className="text-and-supporting-text-26">
              <div className="text-133 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-16 inter-normal-pale-sky-16px">
                <span className="inter-normal-pale-sky-16px">{spanText1}</span>
                <span className="span1">{spanText2}</span>
              </p>
            </div>
          </div>
          <div className="content-96">
            <SizelgHierarchyPrimaryIconFalseDest2
              sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
            />
          </div>
          <div className="row-10">
            <div className="text-134 inter-normal-pale-sky-14px">{text2}</div>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe.className}
              sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalseProps}
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

export default ForgotPassword2;
