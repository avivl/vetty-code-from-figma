import React from "react";
import "./Phone.css";

class Phone extends React.Component {
  render() {
    const { phone, x4395821578, className } = this.props;

    return (
      <div className={`phone-11 ${className || ""}`}>
        <div className="phone-10 inter-semi-bold-santas-gray-12px">{phone}</div>
        <div className="x439-582-1578-3 inter-medium-oxford-blue-14px">{x4395821578}</div>
      </div>
    );
  }
}

export default Phone;
