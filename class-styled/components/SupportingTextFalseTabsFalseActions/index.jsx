import React from "react";
import styled from "styled-components";
import { InterMediumMirage18px } from "../../styledMixins";


class SupportingTextFalseTabsFalseActions extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <SectionHeader className={`section-header-4 ${className || ""}`}>
        <Text className="text-102">{children}</Text>
      </SectionHeader>
    );
  }
}

const SectionHeader = styled.div`
  margin-left: 16px;
  width: 343px;
  height: 29px;
  display: flex;

  &.section-header-4.section-header-5 {
    width: 347px;
    margin-top: 30px;
    margin-left: unset;
  }

  &.section-header-4.section-header-7 {
    width: 347px;
    margin-top: 30px;
    margin-left: unset;
  }
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  width: 343px;
  height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumMirage18px}

  .section-header-4.section-header-5  & {
    width: 347px;
  }
`;

const Text2 = styled.div`
  ${InterMediumMirage18px}

  .section-header-4.section-header-7  & {
    width: 347px;
  }
`;

export default SupportingTextFalseTabsFalseActions;
