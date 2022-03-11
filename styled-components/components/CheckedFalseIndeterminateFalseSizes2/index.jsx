import React from "react";
import CheckedFalseIndeterminateFalseSizes3 from "../CheckedFalseIndeterminateFalseSizes3";
import styled from "styled-components";


class CheckedFalseIndeterminateFalseSizes2 extends React.Component {
  render() {
    return (
      <Checkbox>
        <CheckedFalseIndeterminateFalseSizes3 />
      </Checkbox>
    );
  }
}

const Checkbox = styled.div`
  height: 16px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 16px;
`;

export default CheckedFalseIndeterminateFalseSizes2;
