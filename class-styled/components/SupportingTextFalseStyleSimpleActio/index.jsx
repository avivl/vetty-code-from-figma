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
          <Actions>
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
          </Actions>
        </Content>
        <Divider></Divider>
      </CardHeader>
    );
  }
}

const CardHeader = styled.div`
  width: 1216px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Content = styled.div`
  width: 1216px;
  height: 79px;
  display: flex;
`;

const TextAndBadge = styled.div`
  margin-top: 26px;
  width: 951px;
  position: relative;
  margin-left: 24px;
  display: flex;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  width: 99px;
  height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Actions = styled.div`
  margin-top: 20px;
  width: 201px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default SupportingTextFalseStyleSimpleActio;
