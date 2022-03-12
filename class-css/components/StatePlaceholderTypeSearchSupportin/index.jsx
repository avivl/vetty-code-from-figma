import React from "react";
import LabelFalseTypeSearchStatePlaceholde from "../LabelFalseTypeSearchStatePlaceholde";
import "./StatePlaceholderTypeSearchSupportin.css";

class StatePlaceholderTypeSearchSupportin extends React.Component {
  render() {
    const { labelFalseTypeSearchStatePlaceholde } = this.props;

    return (
      <div className="input-dropdown-22">
        <LabelFalseTypeSearchStatePlaceholde
          search={labelFalseTypeSearchStatePlaceholde.search}
          text2Props={labelFalseTypeSearchStatePlaceholde.text2Props}
        />
      </div>
    );
  }
}

export default StatePlaceholderTypeSearchSupportin;
