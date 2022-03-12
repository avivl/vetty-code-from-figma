import React from "react";
import Content32 from "../Content32";
import "./Content8.css";

class Content8 extends React.Component {
  render() {
    const { className, content32Props } = this.props;

    return (
      <div className={`content-45 ${className || ""}`}>
        <Content32 frame3Props={content32Props.frame3Props} />
      </div>
    );
  }
}

export default Content8;
