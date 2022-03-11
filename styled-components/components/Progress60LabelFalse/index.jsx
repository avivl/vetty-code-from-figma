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
  height: 40px;
  display: flex;
  align-items: center;
  min-width: 83px;
`;

const ProgressBar1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 83px;
  background-color: #eff4ff;
  border-radius: 8px;
`;

const Progress = styled.div`
  width: 55px;
  height: 8px;
  background-color: #156fee;
  border-radius: 4px;
`;

export default Progress60LabelFalse;
