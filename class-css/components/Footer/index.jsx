import React from "react";
import StateDefault from "../StateDefault";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    const { stateDefaultProps } = this.props;

    return (
      <div className="footer">
        <div className="divider-10"></div>
        <div className="content-36">
          <div className="actions">
            <StateDefault
              className={stateDefaultProps.className}
              sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
