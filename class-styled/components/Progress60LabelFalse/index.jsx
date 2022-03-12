import React from "react";
import styled from "styled-components";


class Progress60LabelFalse extends React.Component {
  render() {
    return (
      <ProgressBar>
        <ProgressBar1>
          <Progress></Progress>
        </ProgressBar1>
      </ProgressBar>
    );
  }
}

const ProgressBar = styled.div`
  margin-top: 16px;
  width: 83px;
  height: 40px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
`;

const ProgressBar1 = styled.div`
  margin-top: 16px;
  width: 83px;
  display: flex;
  background-color: #eff4ff;
  border-radius: 8px;
`;

const Progress = styled.div`
  height: 8px;
  flex: 1;
  background-color: #156fee;
  border-radius: 4px;
`;

export default Progress60LabelFalse;
