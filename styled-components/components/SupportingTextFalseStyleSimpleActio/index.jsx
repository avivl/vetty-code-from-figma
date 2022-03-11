import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import styled from "styled-components";
import { InterMediumMirage18px } from "../../styledMixins";


class SupportingTextFalseStyleSimpleActio extends React.Component {
  render() {
    const { text, sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <CardHeader>
        <Content>
          <TextAndBadge>
            <Text>{text}</Text>
            <SizesmIconFalseColorPrimary iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps} />
          </TextAndBadge>
          <SizemdHierarchySecondaryGrayIconLea2
            className={sizemdHierarchySecondaryGrayIconLea.className}
            sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
          />
        </Content>
        <Divider></Divider>
      </CardHeader>
    );
  }
}

const CardHeader = styled.div`
  width: 1216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80px;
  background-color: var(--white);
`;

const Content = styled.div`
  height: 79px;
  position: relative;
  display: flex;
  padding: 19px 24px;
  align-items: center;
  min-width: 1216px;
`;

const TextAndBadge = styled.div`
  height: 28px;
  position: relative;
  margin-top: 1px;
  display: flex;
  align-items: center;
  min-width: 951px;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  min-height: 28px;
  min-width: 99px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 1216px;
  height: 1px;
  background-color: var(--gallery);
`;

export default SupportingTextFalseStyleSimpleActio;
