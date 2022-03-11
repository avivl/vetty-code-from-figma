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
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 177px;
`;

const Text = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 20px;
  margin-left: 8px;
  min-width: 153px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default CheckedFalseIndeterminateFalseSizes;
