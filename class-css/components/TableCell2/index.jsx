import React from "react";
import SocialIcon from "../SocialIcon";
import "./TableCell2.css";

class TableCell2 extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <div className={`table-cell-32-1 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <div className="text-167 inter-normal-pale-sky-14px">{text}</div>
      </div>
    );
  }
}

export default TableCell2;
