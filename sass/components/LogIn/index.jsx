import React from "react";
import Frame4 from "../Frame4";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
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
      typeDefaultLeadingIconFalseLabelTru1Props,
      typeDefaultLeadingIconFalseLabelTru2Props,
      checkedFalseIndeterminateFalseSizesProps,
      sizemdHierarchyLinkColorIconFalseDe21Props,
      sizelgHierarchyPrimaryIconFalseDest2Props,
      styleButtonsThemeColorWithBrand2Props,
      sizemdHierarchyLinkColorIconFalseDe22Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="log-in screen">
          <div className="header-2">
            <Frame4 />
            <div className="text-and-supporting-text-5">
              <div className="text-108 inter-semi-bold-mirage-30px">{text1}</div>
              <p className="supporting-text-9 inter-normal-pale-sky-16px">{supportingText}</p>
            </div>
          </div>
          <div className="content-32">
            <div className="form-1">
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru1Props.className}
                typeDefaultDestructiveFalseProps={
                  typeDefaultLeadingIconFalseLabelTru1Props.typeDefaultDestructiveFalseProps
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru2Props.className}
                typeDefaultDestructiveFalseProps={
                  typeDefaultLeadingIconFalseLabelTru2Props.typeDefaultDestructiveFalseProps
                }
              />
            </div>
            <div className="row-8">
              <CheckedFalseIndeterminateFalseSizes text={checkedFalseIndeterminateFalseSizesProps.text} />
              <SizemdHierarchyLinkColorIconFalseDe2
                sizemdIconFalse4Props={sizemdHierarchyLinkColorIconFalseDe21Props.sizemdIconFalse4Props}
              />
            </div>
            <div className="actions-2">
              <SizelgHierarchyPrimaryIconFalseDest2
                sizelgIconFalse3Props={sizelgHierarchyPrimaryIconFalseDest2Props.sizelgIconFalse3Props}
              />
              <StyleButtonsThemeColorWithBrand2
                socialGoogleSupportingTextTrueTheme2Props={
                  styleButtonsThemeColorWithBrand2Props.socialGoogleSupportingTextTrueTheme2Props
                }
              />
            </div>
          </div>
          <div className="row-9">
            <div className="text-109 inter-normal-pale-sky-14px">{text2}</div>
            <SizemdHierarchyLinkColorIconFalseDe2
              className={sizemdHierarchyLinkColorIconFalseDe22Props.className}
              sizemdIconFalse4Props={sizemdHierarchyLinkColorIconFalseDe22Props.sizemdIconFalse4Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
