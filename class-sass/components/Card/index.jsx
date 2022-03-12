import React from "react";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import "./Card.sass";

class Card extends React.Component {
  render() {
    const { className, sizemdHierarchyLinkColorIconFalseDe } = this.props;

    return (
      <div className={`card-2 ${className || ""}`}>
        <div className="content-55">
          <div className="heading-and-toggle">
            <div className="heading-and-icon">
              <p className="heading-5 inter-semi-bold-mirage-16px">
                Technical Program Manager, Mobile Software Engineering
              </p>
            </div>
          </div>
          <div className="frame-14014">
            <img className="link" src="/img/link@2x.png" />
            <div className="supporting-text-6 inter-normal-pale-sky-14px">www.vetti.com/technical345</div>
          </div>
        </div>
        <div className="action">
          <div className="divider-14"></div>
          <div className="content-56">
            <SizemdHierarchyLinkColorIconFalseDe
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
            <div className="text-104 inter-medium-royal-blue-14px">View Page</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
