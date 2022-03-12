import React from "react";
import "./SizexlColorPrimaryThemeLightCircleO.sass";

class SizexlColorPrimaryThemeLightCircleO extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <div className="featured-icon">
        <img className="mail" src={src} />
      </div>
    );
  }
}

export default SizexlColorPrimaryThemeLightCircleO;
