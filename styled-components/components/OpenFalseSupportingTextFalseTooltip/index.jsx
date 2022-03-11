import React from "react";
import styled from "styled-components";


class OpenFalseSupportingTextFalseTooltip extends React.Component {
  render() {
    const { src } = this.props;

    return <HelpIcon style={{ backgroundImage: `url(${src})` }}></HelpIcon>;
  }
}

const HelpIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  background-size: 100% 100%;
`;

export default OpenFalseSupportingTextFalseTooltip;
