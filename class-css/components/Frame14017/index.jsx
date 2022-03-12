import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import "./Frame14017.css";

class Frame14017 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF, sectionProps } = this.props;

    return (
      <div className="frame-14017">
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
      </div>
    );
  }
}

export default Frame14017;
