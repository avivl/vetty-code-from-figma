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
  height: 76px;
  margin-top: -10px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
  min-width: 76px;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Mail = styled.img`
  width: 28px;
  height: 28px;
`;

const FeaturedIcon1 = styled.div`
  height: 76px;
  margin-top: -10px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
  min-width: 76px;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Key = styled.img`
  width: 28px;
  height: 28px;
`;

const FeaturedIcon2 = styled.div`
  height: 76px;
  margin-top: -10px;
  display: flex;
  padding: 9px;
  align-items: flex-start;
  min-width: 76px;
  background-color: var(--royal-blue-2);
  border-radius: 28px;
`;

const Key1 = styled.img`
  width: 28px;
  height: 28px;
`;

export default SizexlColorPrimaryThemeLightCircleO;
