import React from "react";
import TypeAvatarOpenFalse from "../TypeAvatarOpenFalse";
import styled from "styled-components";


class Content4 extends React.Component {
  render() {
    const { typeAvatarOpenFalseProps } = this.props;

    return (
      <Content>
        <TypeAvatarOpenFalse className={typeAvatarOpenFalseProps.className} />
      </Content>
    );
  }
}

const Content = styled.div`
  height: 40px;
  width: 96px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;
`;

const Content1 = styled.div`
  height: 40px;
  width: 96px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;
`;

const Content2 = styled.div`
  height: 40px;
  width: 96px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;
`;

const Content3 = styled.div`
  height: 40px;
  width: 96px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;
`;

const Content5 = styled.div`
  height: 40px;
  width: 96px;
  align-self: center;
  position: relative;
  margin-right: 32px;
  display: flex;
`;

export default Content4;
