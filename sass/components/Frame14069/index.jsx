import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import Content2 from "../Content2";
import "./Frame14069.sass";

class Frame14069 extends React.Component {
  render() {
    const { className, preferenceAgencyProps, content2Props } = this.props;

    return (
      <div className={`frame-14069-1 ${className || ""}`}>
        <PreferenceAgency content2Props={preferenceAgencyProps.content2Props} />
        <div className="share-project-2">
          <div className="overlap-group-2 border-1px-santas-gray">
            <img className="globe" src="/img/globe@2x.svg" />
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

export default Frame14069;
