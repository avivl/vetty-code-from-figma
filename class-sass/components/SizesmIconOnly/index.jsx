import React from "react";
import "./SizesmIconOnly.sass";

class SizesmIconOnly extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="button-base-34">
        <img className="log-out-1" src={src} />
      </div>
    );
  }
}

export default SizesmIconOnly;
