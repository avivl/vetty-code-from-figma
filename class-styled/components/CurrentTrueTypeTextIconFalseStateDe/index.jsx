import React from "react";
import styled from "styled-components";
import { InterMediumPurpleHeart14px } from "../../styledMixins";


class CurrentTrueTypeTextIconFalseStateDe extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <BreadcrumbButtonBase className={`breadcrumb-button-base-7 ${className || ""}`}>
        <Text className="text-6">{children}</Text>
      </BreadcrumbButtonBase>
    );
  }
}

const BreadcrumbButtonBase = styled.div`
  width: 387px;
  height: 20px;
  margin-left: 12px;
  display: flex;

  &.breadcrumb-button-base-7.breadcrumb-button-base-8 {
    width: 77px;
  }

  &.breadcrumb-button-base-7.breadcrumb-button-base-9 {
    width: 77px;
  }

  &.breadcrumb-button-base-7.breadcrumb-button-base-10 {
    width: 77px;
  }
`;

const Text = styled.p`
  ${InterMediumPurpleHeart14px}
  flex: 1;
  width: 387px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumPurpleHeart14px}

  .breadcrumb-button-base-7.breadcrumb-button-base-8  & {
    width: 77px;
  }
`;

const Text2 = styled.div`
  ${InterMediumPurpleHeart14px}

  .breadcrumb-button-base-7.breadcrumb-button-base-9  & {
    width: 77px;
  }
`;

const Text3 = styled.div`
  ${InterMediumPurpleHeart14px}

  .breadcrumb-button-base-7.breadcrumb-button-base-10  & {
    width: 77px;
  }
`;

export default CurrentTrueTypeTextIconFalseStateDe;
