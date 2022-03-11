import React from "react";
import Content3 from "../Content3";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import BreadcrumbsFalseSupportingTextTrueS from "../BreadcrumbsFalseSupportingTextTrueS";
import Content4 from "../Content4";
import "./Desktop.sass";

class Desktop extends React.Component {
  render() {
    const {
      content3Props,
      currentTrueBadgeFalseToggleFalseIco,
      typeAvatarOpenFalseProps,
      breadcrumbsFalseSupportingTextTrueS,
      content41Props,
      content42Props,
      content43Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="desktop screen">
          <div className="header-navigation-3">
            <div className="container-4">
              <div className="content-12">
                <Content3 frame3Props={content3Props.frame3Props} />
                <CurrentTrueBadgeFalseToggleFalseIco>
                  {currentTrueBadgeFalseToggleFalseIco.children}
                </CurrentTrueBadgeFalseToggleFalseIco>
              </div>
              <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
            </div>
            <img className="divider-12" src="/img/divider@1x.svg" />
          </div>
          <div className="main">
            <BreadcrumbsFalseSupportingTextTrueS
              text={breadcrumbsFalseSupportingTextTrueS.text}
              supportingText={breadcrumbsFalseSupportingTextTrueS.supportingText}
              sizemdHierarchySecondaryGrayIconLea={
                breadcrumbsFalseSupportingTextTrueS.sizemdHierarchySecondaryGrayIconLea
              }
            />
            <div className="section-11">
              <Content4
                card1Props={content41Props.card1Props}
                card2Props={content41Props.card2Props}
                card3Props={content41Props.card3Props}
              />
              <Content4
                className={content42Props.className}
                card1Props={content42Props.card1Props}
                card2Props={content42Props.card2Props}
                card3Props={content42Props.card3Props}
              />
              <Content4
                className={content43Props.className}
                card1Props={content43Props.card1Props}
                card2Props={content43Props.card2Props}
                card3Props={content43Props.card3Props}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
