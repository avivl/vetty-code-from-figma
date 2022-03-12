import React from "react";
import CompanyLogo from "../CompanyLogo";
import "./Content2.css";

class Content2 extends React.Component {
  render() {
    const { className, companyLogoProps } = this.props;

    return (
      <div className={`content-8 ${className || ""}`}>
        <CompanyLogo frame3Props={companyLogoProps.frame3Props} />
      </div>
    );
  }
}

export default Content2;
