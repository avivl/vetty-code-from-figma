import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Footer2 extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <Footer className={`footer-1 ${className || ""}`}>
        <Divider className="divider-9"></Divider>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </Footer>
    );
  }
}

const Footer = styled.div`
  width: 347px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 57px;

  &.footer-1.footer-2 {
    margin-top: 24px;
  }
`;

const Divider = styled.div`
  width: 347px;
  height: 1px;
  background-color: var(--gallery);
`;

export default Footer2;
