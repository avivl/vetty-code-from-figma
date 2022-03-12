import React from "react";
import Content8 from "../Content8";
import CurrentTrueBadgeFalseToggleFalseIco from "../CurrentTrueBadgeFalseToggleFalseIco";
import Content from "../Content";
import BreadcrumbsFalseSupportingTextTrueS from "../BreadcrumbsFalseSupportingTextTrueS";
import Content9 from "../Content9";
import "./Desktop.sass";

class Desktop extends React.Component {
  render() {
    const {
      divider,
      content8Props,
      currentTrueBadgeFalseToggleFalseIco,
      contentProps,
      breadcrumbsFalseSupportingTextTrueS,
      content91Props,
      content92Props,
      content93Props,
    } = this.props;

    return (
      <div className="desktop screen">
        <div className="header-navigation-2">
          <div className="container-5">
            <div className="content-43">
              <Content8 content32Props={content8Props.content32Props} />
              <div className="navigation-4">
                <CurrentTrueBadgeFalseToggleFalseIco>
                  {currentTrueBadgeFalseToggleFalseIco.children}
                </CurrentTrueBadgeFalseToggleFalseIco>
              </div>
            </div>
            <Content className={contentProps.className} />
          </div>
          <img className="divider-13" src={divider} />
        </div>
        <div className="main">
          <div className="section-23">
            <div className="container-6">
              <div className="sections">
                <div className="header-section">
                  <BreadcrumbsFalseSupportingTextTrueS
                    text={breadcrumbsFalseSupportingTextTrueS.text}
                    text2Props={breadcrumbsFalseSupportingTextTrueS.text2Props}
                    sizemdHierarchySecondaryGrayIconLea={
                      breadcrumbsFalseSupportingTextTrueS.sizemdHierarchySecondaryGrayIconLea
                    }
                  />
                </div>
                <div className="section-24">
                  <div className="section-25">
                    <div className="container-7">
                      <Content9
                        card1Props={content91Props.card1Props}
                        card2Props={content91Props.card2Props}
                        card3Props={content91Props.card3Props}
                      />
                      <Content9
                        className={content92Props.className}
                        card1Props={content92Props.card1Props}
                        card2Props={content92Props.card2Props}
                        card3Props={content92Props.card3Props}
                      />
                      <Content9
                        className={content93Props.className}
                        card1Props={content93Props.card1Props}
                        card2Props={content93Props.card2Props}
                        card3Props={content93Props.card3Props}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
