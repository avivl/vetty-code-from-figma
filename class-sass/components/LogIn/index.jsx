import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import CheckedFalseIndeterminateFalseSizes from "../CheckedFalseIndeterminateFalseSizes";
import SizemdHierarchyLinkColorIconFalseDe2 from "../SizemdHierarchyLinkColorIconFalseDe2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import StyleButtonsThemeColorWithBrand2 from "../StyleButtonsThemeColorWithBrand2";
import "./LogIn.sass";

class LogIn extends React.Component {
  render() {
    const {
      text1,
      supportingText,
      text2,
      frame4Props,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      checkedFalseIndeterminateFalseSizes,
      sizemdHierarchyLinkColorIconFalseDe,
      sizelgHierarchyPrimaryIconFalseDest,
      styleButtonsThemeColorWithBrand2Pro,
      sizemdHierarchyLinkColorIconFalseDe2,
    } = this.props;

    return (
      <div className="log-in screen">
        <div className="content-93">
          <div className="header-2">
            <Frame4 className={frame4Props.className} />
            <div className="text-and-supporting-text-25">
              <div className="text-127 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-14 inter-normal-pale-sky-16px">{supportingText}</p>
            </div>
          </div>
          <form className="content-94">
            <div className="form-1">
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
            </div>
            <div className="row-8">
              <CheckedFalseIndeterminateFalseSizes text={checkedFalseIndeterminateFalseSizes.text} />
              <SizemdHierarchyLinkColorIconFalseDe2
                sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalseProps}
              />
            </div>
            <div className="actions-11">
              <SizelgHierarchyPrimaryIconFalseDest2
                sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
              />
              <StyleButtonsThemeColorWithBrand2
                socialGoogleSupportingTextTrueTheme={
                  styleButtonsThemeColorWithBrand2Pro.socialGoogleSupportingTextTrueTheme
                }
              />
            </div>
          </form>
          <div className="row-9">
            <div className="text-128 inter-normal-pale-sky-14px">{text2}</div>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe2.className}
              sizemdIconFalseProps={sizemdHierarchyLinkColorIconFalseDe2.sizemdIconFalseProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
