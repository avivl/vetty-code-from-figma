import React from "react";
import styled from "styled-components";
import { Border1pxMischka } from "../../styledMixins";


class CheckedFalseIndeterminateFalseSizes3 extends React.Component {
  render() {
    return <CheckboxBase></CheckboxBase>;
  }
}

const CheckboxBase = styled.div`
  ${Border1pxMischka}
  width: 16px;
  height: 16px;
  background-color: var(--white);
  border-radius: 4px;
`;

export default CheckedFalseIndeterminateFalseSizes3;
