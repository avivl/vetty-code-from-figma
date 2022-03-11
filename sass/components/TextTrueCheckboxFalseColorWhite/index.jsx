import React from "react";
import HelpIconFalseArrowFalseStateDefault from "../HelpIconFalseArrowFalseStateDefault";
import "./TextTrueCheckboxFalseColorWhite.sass";

class TextTrueCheckboxFalseColorWhite extends React.Component {
  render() {
    const { className, helpIconFalseArrowFalseStateDefaultProps } = this.props;

    return (
      <div className={`table-header-cell ${className || ""}`}>
        <HelpIconFalseArrowFalseStateDefault className={helpIconFalseArrowFalseStateDefaultProps.className}>
          {helpIconFalseArrowFalseStateDefaultProps.children}
        </HelpIconFalseArrowFalseStateDefault>
      </div>
    );
  }
}

export default TextTrueCheckboxFalseColorWhite;
