import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import "./Content4.css";

class Content4 extends React.Component {
  render() {
    const { typeAvatarOpenFalseProps } = this.props;

    return (
      <div className="content-17">
        <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
      </div>
    );
  }
}

export default Content4;
