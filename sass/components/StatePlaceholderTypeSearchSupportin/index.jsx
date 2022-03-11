import React from "react";
import LabelFalseTypeSearchStatePlaceholde from "../LabelFalseTypeSearchStatePlaceholde";
import "./StatePlaceholderTypeSearchSupportin.sass";

class StatePlaceholderTypeSearchSupportin extends React.Component {
  render() {
    const { labelFalseTypeSearchStatePlaceholdeProps } = this.props;

    return (
      <div className="input-dropdown-19">
        <LabelFalseTypeSearchStatePlaceholde text={labelFalseTypeSearchStatePlaceholdeProps.text} />
      </div>
    );
  }
}

export default StatePlaceholderTypeSearchSupportin;
