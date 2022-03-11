import React from "react";
import styled from "styled-components";
import { InterMediumPurpleHeart14px } from "../../styledMixins";


class CurrentTrueTypeTextIconFalseStateDe extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BreadcrumbButtonBase className={`breadcrumb-button-base-6 ${className || ""}`}>
        <Text className="text-6">{children}</Text>
      </BreadcrumbButtonBase>
    );
  }
}

const BreadcrumbButtonBase = styled.div`
  height: 20px;
  margin-left: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 387px;

  &.breadcrumb-button-base-6.breadcrumb-button-base-7 {
    min-width: 77px;
  }

  &.breadcrumb-button-base-6.breadcrumb-button-base-8 {
    min-width: 77px;
  }
`;

const Text = styled.p`
  ${InterMediumPurpleHeart14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default CurrentTrueTypeTextIconFalseStateDe;
