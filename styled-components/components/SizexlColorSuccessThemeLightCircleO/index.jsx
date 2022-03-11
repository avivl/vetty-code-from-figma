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
  height: 66px;
  margin-top: -5px;
  display: flex;
  padding: 14px;
  align-items: flex-start;
  min-width: 66px;
  background-color: #d0fadf;
  border-radius: 28px;
  border: 10px solid var(--narvik);
`;

const CheckCircle = styled.img`
  width: 28px;
  height: 28px;
`;

export default SizexlColorSuccessThemeLightCircleO;
