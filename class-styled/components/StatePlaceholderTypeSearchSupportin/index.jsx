import React from "react";
import LabelFalseTypeSearchStatePlaceholde from "../LabelFalseTypeSearchStatePlaceholde";
import styled from "styled-components";


class StatePlaceholderTypeSearchSupportin extends React.Component {
  render() {
    const { labelFalseTypeSearchStatePlaceholde } = this.props;

    return (
      <InputDropdown>
        <LabelFalseTypeSearchStatePlaceholde
          search={labelFalseTypeSearchStatePlaceholde.search}
          text2Props={labelFalseTypeSearchStatePlaceholde.text2Props}
        />
      </InputDropdown>
    );
  }
}

const InputDropdown = styled.div`
  width: 280px;
  height: 44px;
  margin-left: 16px;
  position: relative;
  display: flex;
`;

export default StatePlaceholderTypeSearchSupportin;
