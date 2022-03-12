import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import TextAndSupportingText32 from "../TextAndSupportingText32";
import styled from "styled-components";


class Header extends React.Component {
  render() {
    const { className, sizexlColorPrimaryThemeLightCircleO, textAndSupportingText3Props } = this.props;

    return (
      <Header1 className={`header-4 ${className || ""}`}>
        <SizexlColorPrimaryThemeLightCircleO src={sizexlColorPrimaryThemeLightCircleO.src} />
        <TextAndSupportingText32
          text={textAndSupportingText3Props.text}
          supportingText={textAndSupportingText3Props.supportingText}
          className={textAndSupportingText3Props.className}
        />
      </Header1>
    );
  }
}

const Header1 = styled.div`
  width: 360px;
  height: 154px;
  position: relative;
  display: flex;
  flex-direction: column;

  &.header-4.header-5 {
    height: 178px;
  }
`;

export default Header;
