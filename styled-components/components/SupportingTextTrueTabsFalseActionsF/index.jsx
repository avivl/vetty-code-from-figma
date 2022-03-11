import React from "react";
import styled from "styled-components";
import { InterMediumMirage20px } from "../../styledMixins";


class SupportingTextTrueTabsFalseActionsF extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <SectionHeader className={`section-header ${className || ""}`}>
        <Text className="text-9">{children}</Text>
        <Divider className="divider-3"></Divider>
      </SectionHeader>
    );
  }
}

const SectionHeader = styled.div`
  width: 904px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 42px;

  &.section-header.section-header-2 {
    margin-left: 0.61px;
  }

  &.section-header.section-header-3 {
    margin-left: 0.61px;
  }
`;

const Text = styled.div`
  ${InterMediumMirage20px}
  min-height: 30px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 904px;
  height: 1px;
  margin-top: 10px;
  background-color: var(--gallery);
`;

export default SupportingTextTrueTabsFalseActionsF;
