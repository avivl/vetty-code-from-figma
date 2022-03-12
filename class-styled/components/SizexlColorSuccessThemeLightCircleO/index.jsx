import React from "react";
import styled from "styled-components";


class SizexlColorSuccessThemeLightCircleO extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <FeaturedIcon>
        <CheckCircle src={src} />
      </FeaturedIcon>
    );
  }
}

const FeaturedIcon = styled.div`
  margin-left: 147px;
  width: 66px;
  height: 66px;
  margin-top: -5px;
  display: flex;
  background-color: #d0fadf;
  border-radius: 28px;
  border: 10px solid var(--narvik);
`;

const CheckCircle = styled.img`
  margin-top: 14px;
  width: 28px;
  height: 28px;
  margin-left: 14px;
`;

export default SizexlColorSuccessThemeLightCircleO;
