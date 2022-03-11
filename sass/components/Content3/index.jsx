import React from "react";
import Frame3 from "../Frame3";
import "./Content3.sass";

class Content3 extends React.Component {
  render() {
    const { className, frame3Props } = this.props;

    return (
      <div className={`content-14 ${className || ""}`}>
        <Frame3
          vector7={frame3Props.vector7}
          x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
          className={frame3Props.className}
        />
        <div className="charming-and-comfort-10 valign-text-middle redhatdisplay-extra-bold-mirage-22px">Vetti</div>
      </div>
    );
  }
}

export default Content3;
