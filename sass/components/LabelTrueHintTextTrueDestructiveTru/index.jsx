import React from "react";
import DestructiveTrue from "../DestructiveTrue";
import "./LabelTrueHintTextTrueDestructiveTru.sass";

class LabelTrueHintTextTrueDestructiveTru extends React.Component {
  render() {
    const { destructiveTrueProps } = this.props;

    return (
      <div className="textarea-input-field-13">
        <DestructiveTrue
          hintText={destructiveTrueProps.hintText}
          destructiveFalse3Props={destructiveTrueProps.destructiveFalse3Props}
        />
      </div>
    );
  }
}

export default LabelTrueHintTextTrueDestructiveTru;
