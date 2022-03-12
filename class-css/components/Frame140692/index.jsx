import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import "./Frame140692.css";

class Frame140692 extends React.Component {
  render() {
    const { preferenceAgencyProps, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <div className="frame-14069-4">
        <PreferenceAgency
          className={preferenceAgencyProps.className}
          uButtonsIconOutlineRestingProps={preferenceAgencyProps.uButtonsIconOutlineRestingProps}
          content7Props={preferenceAgencyProps.content7Props}
        />
        <div className="share-project-9">
          <UButtonsIconOutlineResting
            src={uButtonsIconOutlineRestingProps.src}
            className={uButtonsIconOutlineRestingProps.className}
          />
          <Content7 className={content7Props.className} content22Props={content7Props.content22Props} />
        </div>
      </div>
    );
  }
}

export default Frame140692;
