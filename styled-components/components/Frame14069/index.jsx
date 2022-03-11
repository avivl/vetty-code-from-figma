import React from "react";
import PreferenceAgency from "../PreferenceAgency";
import Content2 from "../Content2";
import styled from "styled-components";
import { Border1pxSantasGray } from "../../styledMixins";


class Frame14069 extends React.Component {
  render() {
    const { className, preferenceAgencyProps, content2Props } = this.props;

    return (
      <Frame140691 className={`frame-14069-1 ${className || ""}`}>
        <PreferenceAgency content2Props={preferenceAgencyProps.content2Props} />
        <ShareProject className="share-project-1">
          <OverlapGroup className="overlap-group-1">
            <Globe className="globe" src="/img/globe@2x.svg" />
          </OverlapGroup>
          <Content2
            text={content2Props.text}
            supportingText={content2Props.supportingText}
            className={content2Props.className}
          />
        </ShareProject>
      </Frame140691>
    );
  }
}

const Frame140691 = styled.div`
  width: 360px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 190px;

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
  padding: 0 15px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  ${Border1pxSantasGray}
  height: 42px;
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

export default Frame14069;
