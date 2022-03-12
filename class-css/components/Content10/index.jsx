import React from "react";
import Content2 from "../Content2";
import "./Content10.css";

class Content10 extends React.Component {
  render() {
    const { className, content2Props } = this.props;

    return (
      <div className={`content-59 ${className || ""}`}>
        <Content2 className={content2Props.className} companyLogoProps={content2Props.companyLogoProps} />
      </div>
    );
  }
}

export default Content10;
