import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import SizelgHierarchyPrimaryIconFalseDest from "../SizelgHierarchyPrimaryIconFalseDest";
import StyleButtonsThemeColorWithBrand from "../StyleButtonsThemeColorWithBrand";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import "./SignUp.sass";

class SignUp extends React.Component {
  render() {
    const {
      text1,
      supportingText,
      text2,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      typeDefaultLeadingIconFalseLabelTru3,
      sizelgHierarchyPrimaryIconFalseDest,
      styleButtonsThemeColorWithBrandProp,
      sizemdHierarchyLinkColorIconFalseDe,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="sign-up screen">
          <div className="header">
            <Frame4 />
            <div className="text-and-supporting-text-2">
              <div className="text-90 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-5 inter-normal-pale-sky-16px">{supportingText}</p>
            </div>
          </div>
          <div className="content-25">
            <div className="form">
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru.className}
                typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps}
              />
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
              />
              <TypeDefaultLeadingIconFalseLabelTru3
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru3.typeDefaultDestructiveFalse2Props
                }
              />
            </div>
            <div className="actions-1">
              <SizelgHierarchyPrimaryIconFalseDest
                sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
              />
              <StyleButtonsThemeColorWithBrand
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrandProp.socialGoogleSupportingTextTrueTheme
                }
              />
            </div>
          </div>
          <div className="row-7">
            <div className="text-92 inter-normal-pale-sky-14px">{text2}</div>
            <SizemdHierarchyLinkColorIconFalseDe
              className={sizemdHierarchyLinkColorIconFalseDe.className}
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
