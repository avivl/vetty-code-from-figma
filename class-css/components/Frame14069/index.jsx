import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import "./Frame14069.css";

class Frame14069 extends React.Component {
  render() {
    const { className, preferenceAgencyProps, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <div className={`frame-14069-1 ${className || ""}`}>
        <PreferenceAgency
          uButtonsIconOutlineRestingProps={preferenceAgencyProps.uButtonsIconOutlineRestingProps}
          content7Props={preferenceAgencyProps.content7Props}
        />
        <div className="share-project-2">
          <UButtonsIconOutlineResting src={uButtonsIconOutlineRestingProps.src} />
          <Content7 className={content7Props.className} content22Props={content7Props.content22Props} />
        </div>
      </div>
    );
  }
}

export default Frame14069;
