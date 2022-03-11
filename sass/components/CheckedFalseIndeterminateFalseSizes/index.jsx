import React from "react";
import CheckedFalseIndeterminateFalseSizes2 from "../CheckedFalseIndeterminateFalseSizes2";
import "./CheckedFalseIndeterminateFalseSizes.sass";

class CheckedFalseIndeterminateFalseSizes extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className="checkbox">
        <CheckedFalseIndeterminateFalseSizes2 />
        <div className="text-110 inter-medium-oxford-blue-14px">{text}</div>
      </div>
    );
  }
}

export default CheckedFalseIndeterminateFalseSizes;
