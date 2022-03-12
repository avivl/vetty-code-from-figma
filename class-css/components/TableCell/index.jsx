import React from "react";
import SocialIcon from "../SocialIcon";
import "./TableCell.css";

class TableCell extends React.Component {
  render() {
    const { text, className, socialIconProps } = this.props;

    return (
      <div className={`table-cell-27-1 ${className || ""}`}>
        <SocialIcon src={socialIconProps.src} className={socialIconProps.className} />
        <div className="text-152 inter-normal-pale-sky-14px">{text}</div>
      </div>
    );
  }
}

export default TableCell;
