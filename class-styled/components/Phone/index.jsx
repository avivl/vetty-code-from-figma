import React from "react";
import styled from "styled-components";
import { InterMediumOxfordBlue14px, InterSemiBoldSantasGray12px } from "../../styledMixins";


class Phone extends React.Component {
  render() {
    const { phone, x4395821578, className } = this.props;

    return (
      <Phone1 className={`phone-10 ${className || ""}`}>
        <Phone2 className="phone-11">{phone}</Phone2>
        <X4395821578 className="x439-582-1578-6">{x4395821578}</X4395821578>
      </Phone1>
    );
  }
}

const Phone1 = styled.div`
  width: 121px;
  height: 51px;
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  align-items: flex-start;

  &.phone-10.phone-12 {
    width: 120px;
    margin-left: 16px;
  }
`;

const Phone2 = styled.div`
  ${InterSemiBoldSantasGray12px}
  min-height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const X4395821578 = styled.div`
  ${InterMediumOxfordBlue14px}
  min-height: 21px;
  margin-top: 8px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

export default Phone;
