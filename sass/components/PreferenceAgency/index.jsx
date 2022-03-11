import React from "react";
import Content2 from "../Content2";
import "./PreferenceAgency.sass";

class PreferenceAgency extends React.Component {
  render() {
    const { className, content2Props } = this.props;

    return (
      <div className={`preference ${className || ""}`}>
        <div className="overlap-group-9 border-1px-santas-gray">
          <img className="users" src="/img/users@2x.svg" />
        </div>
        <Content2 text={content2Props.text} supportingText={content2Props.supportingText} />
      </div>
    );
  }
}

export default PreferenceAgency;
