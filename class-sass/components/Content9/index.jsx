import React from "react";
import Card from "../Card";
import "./Content9.sass";

class Content9 extends React.Component {
  render() {
    const { className, card1Props, card2Props, card3Props } = this.props;

    return (
      <div className={`content-54 ${className || ""}`}>
        <Card sizemdHierarchyLinkColorIconFalseDe={card1Props.sizemdHierarchyLinkColorIconFalseDe} />
        <Card
          className={card2Props.className}
          sizemdHierarchyLinkColorIconFalseDe={card2Props.sizemdHierarchyLinkColorIconFalseDe}
        />
        <Card
          className={card3Props.className}
          sizemdHierarchyLinkColorIconFalseDe={card3Props.sizemdHierarchyLinkColorIconFalseDe}
        />
      </div>
    );
  }
}

export default Content9;
