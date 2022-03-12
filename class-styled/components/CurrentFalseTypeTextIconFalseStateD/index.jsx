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
  width: 66px;
  height: 20px;
  display: flex;

  &.breadcrumb-button-base.breadcrumb-button-base-1 {
    width: 77px;
    margin-left: 12px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-3 {
    width: 387px;
    margin-left: 12px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-4 {
    width: 387px;
    margin-left: 12px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-5 {
    width: 387px;
    margin-top: 24px;
  }

  &.breadcrumb-button-base.breadcrumb-button-base-6 {
    width: 387px;
    margin-left: 12px;
  }
`;

const Text = styled.div`
  ${InterMediumPaleSky14px}
  flex: 1;
  width: 66px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumPaleSky14px}

  .breadcrumb-button-base.breadcrumb-button-base-1  & {
    width: 77px;
  }
`;

const Text2 = styled.p`
  ${InterMediumPaleSky14px}

  .breadcrumb-button-base.breadcrumb-button-base-3  & {
    width: 387px;
  }
`;

const Text3 = styled.p`
  ${InterMediumPaleSky14px}

  .breadcrumb-button-base.breadcrumb-button-base-4  & {
    width: 387px;
  }
`;

const Text4 = styled.p`
  ${InterMediumPaleSky14px}

  .breadcrumb-button-base.breadcrumb-button-base-5  & {
    width: 387px;
  }
`;

const Text5 = styled.p`
  ${InterMediumPaleSky14px}

  .breadcrumb-button-base.breadcrumb-button-base-6  & {
    width: 387px;
  }
`;

export default CurrentFalseTypeTextIconFalseStateD;
