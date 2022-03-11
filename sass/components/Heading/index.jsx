import React from "react";
import StateDefault from "../StateDefault";
import "./Heading.sass";

class Heading extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <div className={`heading-8 ${className || ""}`}>
        <div className="text-99 inter-medium-mirage-24px">Technical Program Manager, Mobile Software Engineering</div>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </div>
    );
  }
}

export default Heading;
