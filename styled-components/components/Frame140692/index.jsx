import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import Content2 from "../Content2";
import styled from "styled-components";
import { Border1pxSantasGray } from "../../styledMixins";


class Frame140692 extends React.Component {
  render() {
    const { preferenceAgencyProps, content2Props } = this.props;

    return (
      <Frame14069>
        <PreferenceAgency
          className={preferenceAgencyProps.className}
          content2Props={preferenceAgencyProps.content2Props}
        />
        <ShareProject>
          <OverlapGroup>
            <Globe src="/img/globe@2x.svg" />
          </OverlapGroup>
          <Content2
            text={content2Props.text}
            supportingText={content2Props.supportingText}
            className={content2Props.className}
          />
        </ShareProject>
      </Frame14069>
    );
  }
}

const Frame14069 = styled.div`
  width: 344px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 190px;
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

const OverlapGroup = styled.div`
  ${Border1pxSantasGray}
  height: 42px;
  margin-left: 7px;
  display: flex;
  padding: 11px;
  align-items: flex-start;
  min-width: 42px;
  border-radius: 10px;
`;

const Globe = styled.img`
  width: 18px;
  height: 18px;
`;

const Frame140691 = styled.div`
  width: 344px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 190px;
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

const OverlapGroup1 = styled.div`
  ${Border1pxSantasGray}
  height: 42px;
  margin-left: 7px;
  display: flex;
  padding: 11px;
  align-items: flex-start;
  min-width: 42px;
  border-radius: 10px;
`;

const Globe1 = styled.img`
  width: 18px;
  height: 18px;
`;

export default Frame140692;
