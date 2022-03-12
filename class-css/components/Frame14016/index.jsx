import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section from "../Section";
import Section22 from "../Section22";
import "./Frame14016.css";

class Frame14016 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF, sectionProps, section22Props } = this.props;

    return (
      <div className="frame-14016">
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
        <Section22 text21Props={section22Props.text21Props} text22Props={section22Props.text22Props} />
      </div>
    );
  }
}

export default Frame14016;
