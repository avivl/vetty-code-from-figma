import React from "react";
import StateDefault from "../StateDefault";
import styled from "styled-components";


class Footer extends React.Component {
  render() {
    const { stateDefaultProps } = this.props;

    return (
      <Footer1>
        <Divider></Divider>
        <StateDefault
          className={stateDefaultProps.className}
          sizemdIconFalseProps={stateDefaultProps.sizemdIconFalseProps}
        />
      </Footer1>
    );
  }
}

const Footer1 = styled.div`
  width: 905px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 57px;
`;

const Divider = styled.div`
  width: 905px;
  height: 1px;
  background-color: var(--gallery);
`;

const Footer2 = styled.div`
  width: 905px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 57px;
`;

const Divider1 = styled.div`
  width: 905px;
  height: 1px;
  background-color: var(--gallery);
`;

const Footer3 = styled.div`
  width: 905px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 57px;
`;

const Divider2 = styled.div`
  width: 905px;
  height: 1px;
  background-color: var(--gallery);
`;

export default Footer;
