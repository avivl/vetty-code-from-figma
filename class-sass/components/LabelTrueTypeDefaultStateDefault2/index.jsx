import React from "react";
import Text from "../Text";
import "./LabelTrueTypeDefaultStateDefault2.sass";

class LabelTrueTypeDefaultStateDefault2 extends React.Component {
  render() {
    const { textProps } = this.props;

    return (
      <div className="input-dropdown-base-18">
        <div className="input-with-label-27">
          <p className="label-31 inter-medium-oxford-blue-14px">Agency or a Single Freelancer</p>
          <div className="input-26 border-1px-mischka">
            <div className="content-64">
              <Text>{textProps.children}</Text>
            </div>
            <img className="chevron-down-9" src="/img/chevron-down@2x.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default LabelTrueTypeDefaultStateDefault2;
