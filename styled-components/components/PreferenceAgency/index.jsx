import React from "react";
import Content2 from "../Content2";
import styled from "styled-components";
import { Border1pxSantasGray } from "../../styledMixins";


class PreferenceAgency extends React.Component {
  render() {
    const { className, content2Props } = this.props;

    return (
      <Preference className={`preference ${className || ""}`}>
        <OverlapGroup className="overlap-group-2">
          <Users className="users" src="/img/users@2x.svg" />
        </OverlapGroup>
        <Content2 text={content2Props.text} supportingText={content2Props.supportingText} />
      </Preference>
    );
  }
}

const Preference = styled.div`
  width: 360px;
  height: 90px;
  position: relative;
  display: flex;
  padding: 0 15px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;

  &.preference.preference-1 {
    width: 344px;
    padding: 0 8px;
  }

  &.preference.preference-3 {
    width: 344px;
    padding: 0 8px;
  }
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

const Users = styled.img`
  width: 18px;
  height: 18px;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxSantasGray}

  .preference.preference-1  & {
    margin-left: 7px;
  }
`;

const OverlapGroup2 = styled.div`
  ${Border1pxSantasGray}

  .preference.preference-3  & {
    margin-left: 7px;
  }
`;

export default PreferenceAgency;
