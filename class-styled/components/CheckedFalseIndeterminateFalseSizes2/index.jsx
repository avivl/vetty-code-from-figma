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
  margin-top: 2px;
  width: 16px;
  height: 16px;
  position: relative;
  display: flex;
`;

export default CheckedFalseIndeterminateFalseSizes2;
