import React from "react";
import DestructiveTrue from "../DestructiveTrue";
import "./LabelTrueHintTextTrueDestructiveTru.sass";

class LabelTrueHintTextTrueDestructiveTru extends React.Component {
  render() {
    const { destructiveTrueProps } = this.props;

    return (
      <div className="textarea-input-field-17">
        <DestructiveTrue
          hintText={destructiveTrueProps.hintText}
          inputWithLabel2Props={destructiveTrueProps.inputWithLabel2Props}
        />
      </div>
    );
  }
}

export default LabelTrueHintTextTrueDestructiveTru;
