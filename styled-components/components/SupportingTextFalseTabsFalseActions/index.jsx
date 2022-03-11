import React from "react";
import styled from "styled-components";
import { InterMediumMirage18px } from "../../styledMixins";


class SupportingTextFalseTabsFalseActions extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <SectionHeader className={`section-header-4 ${className || ""}`}>
        <Text className="text-41">{children}</Text>
      </SectionHeader>
    );
  }
}

const SectionHeader = styled.div`
  height: 29px;
  display: flex;
  align-items: flex-start;
  min-width: 343px;

  &.section-header-4.section-header-5 {
    margin-top: 30px;
    min-width: 347px;
  }

  &.section-header-4.section-header-7 {
    margin-top: 30px;
    min-width: 347px;
  }
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  min-height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

export default SupportingTextFalseTabsFalseActions;
