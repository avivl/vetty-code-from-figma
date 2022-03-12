import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
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
      <div className="sign-up screen">
        <div className="content-68">
          <div className="header">
            <Frame4 />
            <div className="text-and-supporting-text-19">
              <div className="text-113 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-8 inter-normal-pale-sky-16px">{supportingText}</p>
            </div>
          </div>
          <form className="content-69">
            <div className="form">
              <TypeDefaultLeadingIconFalseLabelTru2
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru2
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse2Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru3
                typeDefaultDestructiveFalse3Props={
                  typeDefaultLeadingIconFalseLabelTru3.typeDefaultDestructiveFalse3Props
                }
              />
            </div>
            <div className="actions-7">
              <SizelgHierarchyPrimaryIconFalseDest>
                {sizelgHierarchyPrimaryIconFalseDest.children}
              </SizelgHierarchyPrimaryIconFalseDest>
              <StyleButtonsThemeColorWithBrand
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrandProp.socialGoogleSupportingTextTrueTheme
                }
              />
            </div>
          </form>
          <div className="row-7">
            <div className="text-114 inter-normal-pale-sky-14px">{text2}</div>
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
