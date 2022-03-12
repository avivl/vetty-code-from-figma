import React from "react";
import Frame3 from "../Frame3";
import styled from "styled-components";
import { RedhatdisplayExtraBoldMirage22px, ValignTextMiddle } from "../../styledMixins";


class Content32 extends React.Component {
  render() {
    const { frame3Props } = this.props;

    return (
      <CompanyLogo>
        <Frame3
          vector7={frame3Props.vector7}
          x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
          className={frame3Props.className}
        />
        <CharmingAndComfort>Vetti</CharmingAndComfort>
      </CompanyLogo>
    );
  }
}

const CompanyLogo = styled.div`
  height: 33.12676239013672px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 147px;
`;

const CharmingAndComfort = styled.div`
  ${ValignTextMiddle}
  ${RedhatdisplayExtraBoldMirage22px}
            height: 33px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

const CompanyLogo1 = styled.div`
  height: 33.12676239013672px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 147px;
`;

const CharmingAndComfort1 = styled.div`
  ${ValignTextMiddle}
  ${RedhatdisplayExtraBoldMirage22px}
            height: 33px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 33.1px;
  white-space: nowrap;
`;

export default Content32;
