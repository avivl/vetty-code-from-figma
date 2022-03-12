import React from "react";
import Text2 from "../Text2";
import "./LabelFalseTypeSearchStatePlaceholde.css";

class LabelFalseTypeSearchStatePlaceholde extends React.Component {
  render() {
    const { search, text2Props } = this.props;

    return (
      <div className="input-dropdown-base-22">
        <div className="input-with-label-50">
          <div className="input-46 border-1px-mischka">
            <div className="content-91">
              <img className="search-2" src={search} />
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LabelFalseTypeSearchStatePlaceholde;
