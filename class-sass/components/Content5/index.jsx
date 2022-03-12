import React from "react";
import Text2 from "../Text2";
import "./Content5.sass";

class Content5 extends React.Component {
  render() {
    const { text2Props } = this.props;

    return (
      <div className="content-27">
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </div>
    );
  }
}

export default Content5;
