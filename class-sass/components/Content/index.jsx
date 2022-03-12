import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import "./Content.sass";

class Content extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`content ${className || ""}`}>
        <TypeAvatarOpenFalse />
      </div>
    );
  }
}

export default Content;
