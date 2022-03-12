import React from "react";
import styled from "styled-components";
import { InterBoldSantasGray64px, ValignTextMiddle } from "../../styledMixins";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="landing-page screen">
        <Title>{children}</Title>
      </div>
    );
  }
}

const Title = styled.h1`
  ${ValignTextMiddle}
  ${InterBoldSantasGray64px}
            margin-top: 96px;
  width: 934px;
  height: 678px;
  margin-left: 397px;
  opacity: 0.5;
  text-align: center;
  letter-spacing: 0;
  line-height: 100px;
`;

const TYPEFORM = styled.div`
  ${ValignTextMiddle}
  ${InterBoldSantasGray64px}
            margin-top: 96px;
  width: 934px;
  height: 678px;
  margin-left: 397px;
  opacity: 0.5;
  text-align: center;
  letter-spacing: 0;
  line-height: 100px;
`;

export default LandingPage;
