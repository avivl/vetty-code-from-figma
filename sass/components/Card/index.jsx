import React from "react";
import SizemdHierarchyLinkColorIconFalseDe from "../SizemdHierarchyLinkColorIconFalseDe";
import "./Card.sass";

class Card extends React.Component {
  render() {
    const { className, sizemdHierarchyLinkColorIconFalseDe } = this.props;

    return (
      <div className={`card-2 ${className || ""}`}>
        <div className="content-21">
          <p className="heading-5 inter-semi-bold-mirage-16px">
            Technical Program Manager, Mobile Software Engineering
          </p>
          <div className="frame-14014">
            <img className="link" src="/img/link@2x.svg" />
            <div className="supporting-text-3 inter-normal-pale-sky-14px">www.vetti.com/technical345</div>
          </div>
        </div>
        <div className="action">
          <div className="divider-13"></div>
          <div className="content-22">
            <SizemdHierarchyLinkColorIconFalseDe
              sizemdIconFalse2Props={sizemdHierarchyLinkColorIconFalseDe.sizemdIconFalse2Props}
            />
            <div className="text-76 inter-medium-royal-blue-14px">View Page</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
