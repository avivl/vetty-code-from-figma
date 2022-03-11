import React from "react";
import "./LabelFalseTypeSearchStatePlaceholde.sass";

class LabelFalseTypeSearchStatePlaceholde extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className="input-dropdown-base-17">
        <div className="input-41 border-1px-mischka">
          <img className="search-1" src="/img/search-1@2x.svg" />
          <div className="text-106 inter-normal-pale-sky-16px">{text}</div>
        </div>
      </div>
    );
  }
}

export default LabelFalseTypeSearchStatePlaceholde;
