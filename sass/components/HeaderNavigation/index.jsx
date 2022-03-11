import React from "react";
import CompanyLogo from "../CompanyLogo";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import "./HeaderNavigation.sass";

class HeaderNavigation extends React.Component {
  render() {
    const { companyLogoProps, typeAvatarOpenFalseProps } = this.props;

    return (
      <div className="header-navigation">
        <div className="container-1">
          <div className="content">
            <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
            <CurrentFalseBadgeFalseToggleFalseIc />
          </div>
          <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
        </div>
        <img className="divider-2" src="/img/divider@1x.svg" />
      </div>
    );
  }
}

export default HeaderNavigation;
