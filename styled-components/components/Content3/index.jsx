import React from "react";
import Frame3 from "../Frame3";
import styled from "styled-components";
import { RedhatdisplayExtraBoldMirage22px, ValignTextMiddle } from "../../styledMixins";


class Content3 extends React.Component {
  render() {
    const { className, frame3Props } = this.props;

    return (
      <Content className={`content-11 ${className || ""}`}>
        <Frame3
          vector7={frame3Props.vector7}
          x5D7F96Dfdf28141Cd047F1675418350C1={frame3Props.x5D7F96Dfdf28141Cd047F1675418350C1}
          className={frame3Props.className}
        />
        <CharmingAndComfort className="charming-and-comfort-2">Vetti</CharmingAndComfort>
      </Content>
    );
  }
}

const Content = styled.div`
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

export default Content3;
