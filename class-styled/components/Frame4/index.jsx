import React from "react";
import styled from "styled-components";


class Frame4 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Frame41 className={`frame-4 ${className || ""}`}>
        <OverlapGroup className="overlap-group-2">
          <Vector7 className="vector-7-1" src="/img/vector-7@2x.png" />
          <X5d7f96dfdf28141cd047f1675418350c1
            className="x5d7f96dfdf28141cd047f1675418350c-1-1"
            src="/img/5d7f96dfdf28141cd047f1675418350c-1@2x.png"
          />
        </OverlapGroup>
      </Frame41>
    );
  }
}

const Frame41 = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  padding: 4.6px 8px;
  align-items: flex-start;
  background-color: var(--royal-blue);
  border-radius: 22px;
  overflow: hidden;

  &.frame-4.frame-4-1 {
    margin-left: 198px;
  }
`;

const OverlapGroup = styled.div`
  width: 28px;
  height: 31px;
  position: relative;
`;

const Vector7 = styled.img`
  position: absolute;
  width: 20px;
  height: 6px;
  top: 25px;
  left: 4px;
`;

const X5d7f96dfdf28141cd047f1675418350c1 = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  left: 0;
`;

export default Frame4;
