import React from "react";
import LabelFalseTypeSearchStatePlaceholde from "../LabelFalseTypeSearchStatePlaceholde";
import styled from "styled-components";


class StatePlaceholderTypeSearchSupportin extends React.Component {
  render() {
    const { labelFalseTypeSearchStatePlaceholde } = this.props;

    return (
      <InputDropdown>
        <LabelFalseTypeSearchStatePlaceholde text={labelFalseTypeSearchStatePlaceholde.text} />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  height: 44px;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 280px;
`;

export default StatePlaceholderTypeSearchSupportin;
