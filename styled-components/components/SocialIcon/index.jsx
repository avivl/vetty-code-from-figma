import React from "react";
import styled from "styled-components";


class SocialIcon extends React.Component {
  render() {
    const { src, className } = this.props;

    return <Menu2 className={`menu-2 ${className || ""}`} src={src} />;
  }
}

const Menu2 = styled.img`
  width: 24px;
  height: 24px;
`;

export default SocialIcon;
