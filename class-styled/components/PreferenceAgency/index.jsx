import React from "react";
import UButtonsIconOutlineResting from "../UButtonsIconOutlineResting";
import Content7 from "../Content7";
import styled from "styled-components";


class PreferenceAgency extends React.Component {
  render() {
    const { className, uButtonsIconOutlineRestingProps, content7Props } = this.props;

    return (
      <Preference className={`preference ${className || ""}`}>
        <UButtonsIconOutlineResting
          src={uButtonsIconOutlineRestingProps.src}
          className={uButtonsIconOutlineRestingProps.className}
        />
        <Content7 content22Props={content7Props.content22Props} />
      </Preference>
    );
  }
}

const Preference = styled.div`
  width: 360px;
  height: 90px;
  position: relative;
  display: flex;
  padding: 0 16px;
  align-items: center;
  background-color: var(--white-lilac);
  border-radius: 8px;
  overflow: hidden;

  &.preference.preference-1 {
    width: 344px;
    padding: 0 8px;
  }

  &.preference.preference-2 {
    width: 344px;
    padding: 0 8px;
  }
`;

export default PreferenceAgency;
