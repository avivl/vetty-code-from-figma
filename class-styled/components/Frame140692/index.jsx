import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import styled from "styled-components";


class Frame140692 extends React.Component {
  render() {
    const { preferenceAgencyProps, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <Frame14069>
        <PreferenceAgency
          className={preferenceAgencyProps.className}
          uButtonsIconOutlineRestingProps={preferenceAgencyProps.uButtonsIconOutlineRestingProps}
          content7Props={preferenceAgencyProps.content7Props}
        />
        <ShareProject>
          <UButtonsIconOutlineResting
            src={uButtonsIconOutlineRestingProps.src}
            className={uButtonsIconOutlineRestingProps.className}
          />
          <Content7 className={content7Props.className} content22Props={content7Props.content22Props} />
        </ShareProject>
      </Frame14069>
    );
  }
}

const Frame14069 = styled.div`
  width: 344px;
  height: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ShareProject = styled.div`
  width: 344px;
  height: 90px;
  position: relative;
  margin-top: 10px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;
`;

const Frame140691 = styled.div`
  width: 344px;
  height: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ShareProject1 = styled.div`
  width: 344px;
  height: 90px;
  position: relative;
  margin-top: 10px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;
`;

export default Frame140692;
