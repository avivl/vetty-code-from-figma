import React from "react";
import Content2 from "../Content2";
import CurrentFalseBadgeFalseToggleFalseIc from "../CurrentFalseBadgeFalseToggleFalseIc";
import Content4 from "../Content4";
import "./HeaderNavigation.sass";

class HeaderNavigation extends React.Component {
  render() {
    const { className, content2Props, content4Props } = this.props;

    return (
      <div className={`header-navigation ${className || ""}`}>
        <div className="container-1">
          <div className="content-4">
            <Content2 companyLogoProps={content2Props.companyLogoProps} />
            <div className="navigation">
              <CurrentFalseBadgeFalseToggleFalseIc />
            </div>
          </div>
          <Content4 typeAvatarOpenFalseProps={content4Props.typeAvatarOpenFalseProps} />
        </div>
        <img className="divider-2" src="/img/divider@1x.png" />
      </div>
    );
  }
}

export default HeaderNavigation;
