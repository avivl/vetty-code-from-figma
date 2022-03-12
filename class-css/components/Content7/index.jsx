import React from "react";
import Content22 from "../Content22";
import "./Content7.css";

class Content7 extends React.Component {
  render() {
    const { className, content22Props } = this.props;

    return (
      <div className={`content-41 ${className || ""}`}>
        <Content22
          text={content22Props.text}
          supportingText={content22Props.supportingText}
          className={content22Props.className}
        />
      </div>
    );
  }
}

export default Content7;
