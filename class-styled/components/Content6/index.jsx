import React from "react";
import Text from "../Text";
import styled from "styled-components";


class Content6 extends React.Component {
  render() {
    const { textProps } = this.props;

    return (
      <Content>
        <Text>{textProps.children}</Text>
      </Content>
    );
  }
}

const Content = styled.div`
  margin-top: 10px;
  width: 178px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content1 = styled.div`
  margin-top: 10px;
  width: 178px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content2 = styled.div`
  margin-top: 10px;
  width: 178px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

const Content3 = styled.div`
  margin-top: 10px;
  width: 178px;
  height: 24px;
  position: relative;
  margin-left: 14px;
  display: flex;
`;

export default Content6;
