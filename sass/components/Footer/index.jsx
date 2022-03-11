import React from "react";
import StateDefault from "../StateDefault";
import "./Footer.sass";

class Footer extends React.Component {
  render() {
    const { stateDefaultProps } = this.props;

    return (
      <div className="footer">
        <div className="divider-9"></div>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </div>
    );
  }
}

export default Footer;
