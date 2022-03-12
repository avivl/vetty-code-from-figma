import React from "react";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import "./PreferenceAgency.sass";

class PreferenceAgency extends React.Component {
  render() {
    const { className, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <div className={`preference ${className || ""}`}>
        <UButtonsIconOutlineResting
          src={uButtonsIconOutlineRestingProps.src}
          className={uButtonsIconOutlineRestingProps.className}
        />
        <Content7 content22Props={content7Props.content22Props} />
      </div>
    );
  }
}

export default PreferenceAgency;
