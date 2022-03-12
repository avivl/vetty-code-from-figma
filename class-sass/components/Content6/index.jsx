import React from "react";
import Text from "../Text";
import "./Content6.sass";

class Content6 extends React.Component {
  render() {
    const { textProps } = this.props;

    return (
      <div className="content-32">
        <Text>{textProps.children}</Text>
      </div>
    );
  }
}

export default Content6;
