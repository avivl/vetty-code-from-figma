import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Footer extends React.Component {
  render() {
    const { stateDefaultProps } = this.props;

    return (
      <Footer1>
        <Divider></Divider>
        <Content>
          <Actions>
            <StateDefault
              className={stateDefaultProps.className}
              sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
            />
          </Actions>
        </Content>
      </Footer1>
    );
  }
}

const Footer1 = styled.div`
  width: 905px;
  height: 57px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Content = styled.div`
  width: 905px;
  margin-top: 16px;
  display: flex;
`;

const Actions = styled.div`
  width: 905px;
  height: 40px;
  position: relative;
  display: flex;
`;

const Footer2 = styled.div`
  width: 905px;
  height: 57px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Content1 = styled.div`
  width: 905px;
  margin-top: 16px;
  display: flex;
`;

const Actions1 = styled.div`
  width: 905px;
  height: 40px;
  position: relative;
  display: flex;
`;

const Footer3 = styled.div`
  width: 905px;
  height: 57px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Divider2 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const Content2 = styled.div`
  width: 905px;
  margin-top: 16px;
  display: flex;
`;

const Actions2 = styled.div`
  width: 905px;
  height: 40px;
  position: relative;
  display: flex;
`;

export default Footer;
