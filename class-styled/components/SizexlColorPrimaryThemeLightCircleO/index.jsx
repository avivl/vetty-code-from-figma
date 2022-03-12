import React from "react";
import styled from "styled-components";


class SizexlColorPrimaryThemeLightCircleO extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <FeaturedIcon>
        <Mail src={src} />
      </FeaturedIcon>
    );
  }
}

const FeaturedIcon = styled.div`
  margin-left: 147px;
  width: 76px;
  height: 76px;
  margin-top: -5px;
  display: flex;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Mail = styled.img`
  margin-top: 14px;
  width: 28px;
  height: 28px;
  margin-left: 14px;
`;

const FeaturedIcon1 = styled.div`
  margin-left: 147px;
  width: 76px;
  height: 76px;
  margin-top: -5px;
  display: flex;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Key = styled.img`
  margin-top: 14px;
  width: 28px;
  height: 28px;
  margin-left: 14px;
`;

const FeaturedIcon2 = styled.div`
  margin-left: 147px;
  width: 76px;
  height: 76px;
  margin-top: -5px;
  display: flex;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Key1 = styled.img`
  margin-top: 14px;
  width: 28px;
  height: 28px;
  margin-left: 14px;
`;

export default SizexlColorPrimaryThemeLightCircleO;
