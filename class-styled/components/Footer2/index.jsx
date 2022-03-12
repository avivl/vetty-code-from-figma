import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Footer2 extends React.Component {
  render() {
    const { className, stateDefaultProps } = this.props;

    return (
      <Footer className={`footer-1 ${className || ""}`}>
        <Divider className="divider-9"></Divider>
        <Content className="content-40">
          <Actions className="actions-3">
            <StateDefault
              className={stateDefaultProps.className}
              sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
            />
          </Actions>
        </Content>
      </Footer>
    );
  }
}

const Footer = styled.div`
  width: 347px;
  height: 57px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  &.footer-1.footer-2 {
    margin-top: 24px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Content = styled.div`
  width: 347px;
  margin-top: 16px;
  display: flex;
`;

const Actions = styled.div`
  width: 347px;
  height: 40px;
  position: relative;
  display: flex;
`;

export default Footer2;
