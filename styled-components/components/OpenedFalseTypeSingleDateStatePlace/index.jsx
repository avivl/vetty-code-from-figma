import React from "react";
import SizemdHierarchySecondaryGrayIconLea from "../SizemdHierarchySecondaryGrayIconLea";
import styled from "styled-components";


class OpenedFalseTypeSingleDateStatePlace extends React.Component {
  render() {
    return (
      <DatePickerDropdown>
        <SizemdHierarchySecondaryGrayIconLea />
      </DatePickerDropdown>
    );
  }
}

const DatePickerDropdown = styled.div`
  height: 40px;
  position: relative;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 136px;
`;

const DatePickerDropdown1 = styled.div`
  height: 40px;
  position: relative;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 136px;
`;

const DatePickerDropdown2 = styled.div`
  height: 40px;
  position: relative;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 136px;
`;

const DatePickerDropdown3 = styled.div`
  height: 40px;
  position: relative;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 136px;
`;

export default OpenedFalseTypeSingleDateStatePlace;
