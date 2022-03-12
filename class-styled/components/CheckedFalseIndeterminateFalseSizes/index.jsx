import React from "react";
import CheckedFalseIndeterminateFalseSizes2 from "../CheckedFalseIndeterminateFalseSizes2";
import styled from "styled-components";
import { InterMediumOxfordBlue14px } from "../../styledMixins";


class CheckedFalseIndeterminateFalseSizes extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <Checkbox>
        <CheckedFalseIndeterminateFalseSizes2 />
        <Text>{text}</Text>
      </Checkbox>
    );
  }
}

const Checkbox = styled.div`
  width: 177px;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  width: 153px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default CheckedFalseIndeterminateFalseSizes;
