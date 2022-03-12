import React from "react";
import Frame3 from "../Frame3";
import "./CompanyLogo.sass";

class CompanyLogo extends React.Component {
  render() {
    const { frame3Props } = this.props;

    return (
      <div className="company-logo">
        <Frame3
          vector7={frame3Props.vector7}
          x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
          className={frame3Props.className}
        />
        <div className="charming-and-comfort valign-text-middle redhatdisplay-extra-bold-mirage-22px">Vetti</div>
        <div className="charming-and-comfort-1 valign-text-middle inter-normal-pale-sky-12px">BETA</div>
      </div>
    );
  }
}

export default CompanyLogo;
