import React from "react";
import HelpIconFalseArrowFalseStateDefault from "../HelpIconFalseArrowFalseStateDefault";
import "./TextTrueCheckboxFalseColorWhite.css";

class TextTrueCheckboxFalseColorWhite extends React.Component {
  render() {
    const { className, helpIconFalseArrowFalseStateDefault } = this.props;

    return (
      <div className={`table-header-cell ${className || ""}`}>
        <HelpIconFalseArrowFalseStateDefault className={helpIconFalseArrowFalseStateDefault.className}>
          {helpIconFalseArrowFalseStateDefault.children}
        </HelpIconFalseArrowFalseStateDefault>
      </div>
    );
  }
}

export default TextTrueCheckboxFalseColorWhite;
