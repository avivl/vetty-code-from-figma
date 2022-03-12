import React from "react";
import OpenedFalseTypeSingleDateStatePlace from "../OpenedFalseTypeSingleDateStatePlace";
import "./InputDropdown.css";

class InputDropdown extends React.Component {
  render() {
    return (
      <div className="input-dropdown-13">
        <div className="input-dropdown-base-14">
          <div className="input-with-label-16">
            <div className="label-18 inter-normal-oxford-blue-14px">Estimated start date</div>
            <OpenedFalseTypeSingleDateStatePlace />
          </div>
        </div>
      </div>
    );
  }
}

export default InputDropdown;
