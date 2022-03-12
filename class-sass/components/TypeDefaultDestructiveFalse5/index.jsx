import React from "react";
import Text2 from "../Text2";
import OpenFalseSupportingTextFalseTooltip from "../OpenFalseSupportingTextFalseTooltip";
import "./TypeDefaultDestructiveFalse5.sass";

class TypeDefaultDestructiveFalse5 extends React.Component {
  render() {
    const { label, text2Props, openFalseSupportingTextFalseTooltip } = this.props;

    return (
      <div className="input-field-base-21">
        <div className="input-with-label-47">
          <div className="label-51 inter-medium-oxford-blue-14px">{label}</div>
          <div className="input-42 border-1px-mischka">
            <div className="content-81">
              <Text2 className={text2Props.className}>{text2Props.children}</Text2>
            </div>
            <OpenFalseSupportingTextFalseTooltip src={openFalseSupportingTextFalseTooltip.src} />
          </div>
        </div>
      </div>
    );
  }
}

export default TypeDefaultDestructiveFalse5;
