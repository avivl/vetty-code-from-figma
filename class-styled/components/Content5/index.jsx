import React from "react";
import Text2 from "../Text2";
import styled from "styled-components";


class Content5 extends React.Component {
  render() {
    const { text2Props } = this.props;

    return (
      <Content>
        <Text2 className={text2Props.className}>{text2Props.children}</Text2>
      </Content>
    );
  }
}

const Content = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content1 = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content2 = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content3 = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content4 = styled.div`
  margin-top: 10px;
  width: 378px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

export default Content5;
