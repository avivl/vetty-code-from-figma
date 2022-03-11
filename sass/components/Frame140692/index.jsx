import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import Content2 from "../Content2";
import "./Frame140692.sass";

class Frame140692 extends React.Component {
  render() {
    const { preferenceAgencyProps, content2Props } = this.props;

    return (
      <div className="frame-14069-4">
        <PreferenceAgency
          className={preferenceAgencyProps.className}
          content2Props={preferenceAgencyProps.content2Props}
        />
        <div className="share-project-9">
          <div className="overlap-group-10 border-1px-santas-gray">
            <img className="globe-4" src="/img/globe@2x.svg" />
          </div>
          <Content2
            text={content2Props.text}
            supportingText={content2Props.supportingText}
            className={content2Props.className}
          />
        </div>
      </div>
    );
  }
}

export default Frame140692;
