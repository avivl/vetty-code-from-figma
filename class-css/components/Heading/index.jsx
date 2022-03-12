import React from "react";
import TextAndSupportingText3 from "../TextAndSupportingText3";
import StateDefault from "../StateDefault";
import "./Heading.css";

class Heading extends React.Component {
  render() {
    const { className, textAndSupportingText3Props, stateDefaultProps } = this.props;

    return (
      <div className={`heading-11 ${className || ""}`}>
        <TextAndSupportingText3 className={textAndSupportingText3Props.className} />
        <StateDefault sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps} />
      </div>
    );
  }
}

export default Heading;
