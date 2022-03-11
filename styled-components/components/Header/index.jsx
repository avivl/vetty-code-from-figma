import React from "react";
import SizexlColorPrimaryThemeLightCircleO from "../SizexlColorPrimaryThemeLightCircleO";
import TextAndSupportingText3 from "../TextAndSupportingText3";
import styled from "styled-components";


class Header extends React.Component {
  render() {
    const { className, sizexlColorPrimaryThemeLightCircleO, textAndSupportingText3Props } = this.props;

    return (
      <Header1 className={`header-4 ${className || ""}`}>
        <SizexlColorPrimaryThemeLightCircleO src={sizexlColorPrimaryThemeLightCircleO.src} />
        <TextAndSupportingText3
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 154px;

  &.header-4.header-5 {
    min-height: 178px;
  }
`;

export default Header;
