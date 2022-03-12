import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import Section22 from "../Section22";
import "./Frame14015.css";

class Frame14015 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF, sectionProps, section22Props } = this.props;

    return (
      <div className="frame-14015">
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <img className="section" src="/img/section@1x.png" />
        <Section text2Props={sectionProps.text2Props} />
        <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
      </div>
    );
  }
}

export default Frame14015;
