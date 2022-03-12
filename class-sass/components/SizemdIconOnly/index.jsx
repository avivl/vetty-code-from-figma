import React from "react";
import "./SizemdIconOnly.sass";

class SizemdIconOnly extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="button-base-44">
        <img className="eye" src={src} />
      </div>
    );
  }
}

export default SizemdIconOnly;
