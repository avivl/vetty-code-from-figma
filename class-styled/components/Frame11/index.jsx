import React from "react";
import styled from "styled-components";
import { InterNormalMirage14px2, InterSemiBoldSantasGray12px } from "../../styledMixins";


class Frame11 extends React.Component {
  render() {
    const { phone, x4395821578 } = this.props;

    return (
      <Frame111>
        <Phone>
          <Phone1>{phone}</Phone1>
          <X4395821578>{x4395821578}</X4395821578>
        </Phone>
      </Frame111>
    );
  }
}

const Frame111 = styled.div`
  width: 312px;
  height: 102px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const Phone = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  align-items: flex-start;
`;

const Phone1 = styled.div`
  ${InterSemiBoldSantasGray12px}
  min-height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const X4395821578 = styled.p`
  ${InterNormalMirage14px2}
  width: 312px;
  min-height: 63px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 21px;
`;

export default Frame11;
