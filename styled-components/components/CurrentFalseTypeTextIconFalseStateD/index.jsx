import React from "react";
import styled from "styled-components";
import { InterMediumPaleSky14px } from "../../styledMixins";


class CurrentFalseTypeTextIconFalseStateD extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BreadcrumbButtonBase className={`breadcrumb-button-base ${className || ""}`}>
        <Text className="text-5">{children}</Text>
      </BreadcrumbButtonBase>
    );
  }
}

const BreadcrumbButtonBase = styled.div`
  height: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 66px;

  &.breadcrumb-button-base.breadcrumb-button-base-1 {
    margin-left: 12px;
    min-width: 77px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-3 {
    margin-left: 12px;
    min-width: 387px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-4 {
    margin-left: 12px;
    min-width: 387px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-5 {
    margin-top: 24px;
    margin-left: 256px;
    min-width: 387px;
  }
`;

const Text = styled.div`
  ${InterMediumPaleSky14px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default CurrentFalseTypeTextIconFalseStateD;
