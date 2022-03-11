import React from "react";
import SocialIcon from "../SocialIcon";
import "./TableCell2.sass";

class TableCell2 extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <div className={`table-cell-23-1 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} />
        <div className="text-143 inter-normal-pale-sky-14px">{text}</div>
      </div>
    );
  }
}

export default TableCell2;
