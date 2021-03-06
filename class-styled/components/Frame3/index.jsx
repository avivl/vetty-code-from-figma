import React from "react";
import styled from "styled-components";


class Frame3 extends React.Component {
  render() {
    const { vector7, x5D7F96Dfdf28141Cd047F1675418350C1, className } = this.props;

    return (
      <Frame31 className={`frame-3 ${className || ""}`}>
        <OverlapGroup className="overlap-group">
          <Vector7 className="vector-7" src={vector7} />
          <X5d7f96dfdf28141cd047f1675418350c1
            className="x5d7f96dfdf28141cd047f1675418350c-1"
            src={x5D7F96Dfdf28141Cd047F1675418350C1}
          />
        </OverlapGroup>
      </Frame31>
    );
  }
}

const Frame31 = styled.div`
  width: 32px;
  height: 32px;
  margin-left: -1px;
  align-self: flex-end;
  margin-bottom: 0.13px;
  display: flex;
  padding: 3.6px 6px;
  align-items: flex-start;
  background-color: var(--royal-blue);
  border-radius: 16px;
  overflow: hidden;

  &.frame-3.frame-3-2 {
    padding: 3.7px 5px;
  }

  &.frame-3.frame-3-3 {
    padding: 3.3px 6px;
  }
`;

const OverlapGroup = styled.div`
  width: 20px;
  height: 23px;
  position: relative;
`;

const Vector7 = styled.img`
  position: absolute;
  width: 14px;
  height: 5px;
  top: 18px;
  left: 3px;
`;

const X5d7f96dfdf28141cd047f1675418350c1 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  .frame-3.frame-3-2 & {
    height: 22px;
    margin-left: 2px;
  }
`;

const Vector71 = styled.img`
  .frame-3.frame-3-2 & {
    left: 2px;
  }
`;

export default Frame3;
