import React from "react";
import Text2 from "../Text2";
import "./Section22.sass";

class Section22 extends React.Component {
  render() {
    const { text21Props, text22Props } = this.props;

    return (
      <div className="section-11">
        <Text2 className={text21Props.className}>{text21Props.children}</Text2>
        <Text2 className={text22Props.className}>{text22Props.children}</Text2>
      </div>
    );
  }
}

export default Section22;
