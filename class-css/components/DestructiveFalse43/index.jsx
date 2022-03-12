import React from "react";
import Input from "../Input";
import "./DestructiveFalse43.css";

class DestructiveFalse43 extends React.Component {
  render() {
    const { inputProps } = this.props;

    return (
      <div className="input-with-label-42">
        <p className="label-36 inter-medium-ebony-clay-14px">
          Add links for similar work you’ve done in the past (seperate by rows)
        </p>
        <Input className={inputProps.className} text2Props={inputProps.text2Props} />
      </div>
    );
  }
}

export default DestructiveFalse43;
