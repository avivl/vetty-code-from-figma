import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import styled from "styled-components";


class Frame14069 extends React.Component {
  render() {
    const { className, preferenceAgencyProps, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <Frame140691 className={`frame-14069-1 ${className || ""}`}>
        <PreferenceAgency
          uButtonsIconOutlineRestingProps={preferenceAgencyProps.uButtonsIconOutlineRestingProps}
          content7Props={preferenceAgencyProps.content7Props}
        />
        <ShareProject className="share-project-1">
          <UButtonsIconOutlineResting src={uButtonsIconOutlineRestingProps.src} />
          <Content7 className={content7Props.className} content22Props={content7Props.content22Props} />
        </ShareProject>
      </Frame140691>
    );
  }
}

const Frame140691 = styled.div`
  width: 360px;
  height: 190px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  &.frame-14069-1.frame-14069-3 {
    position: absolute;
    top: 476px;
    left: 1283px;
    margin-top: unset;
  }
`;

const ShareProject = styled.div`
  width: 360px;
  height: 90px;
  position: relative;
  margin-top: 10px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;
`;

export default Frame14069;
