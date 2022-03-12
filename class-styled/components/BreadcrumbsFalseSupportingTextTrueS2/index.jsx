import React from "react";
import Text2 from "../Text2";
import SizemdHierarchyPrimaryIconFalseDest from "../SizemdHierarchyPrimaryIconFalseDest";
import styled from "styled-components";
import { InterMediumMirage30px } from "../../styledMixins";


class BreadcrumbsFalseSupportingTextTrueS2 extends React.Component {
  render() {
    const { text, text2Props, sizemdHierarchyPrimaryIconFalseDest } = this.props;

    return (
      <PageHeader>
        <PageHeader>
          <TextAndSupportingText>
            <Text>{text}</Text>
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </TextAndSupportingText>
          <Actions>
            <SizemdHierarchyPrimaryIconFalseDest
              sizemdIconFalse5Props={sizemdHierarchyPrimaryIconFalseDest.sizemdIconFalse5Props}
            />
          </Actions>
        </PageHeader>
      </PageHeader>
    );
  }
}

const PageHeader = styled.div`
  width: 1216px;
  display: flex;
`;

const TextAndSupportingText = styled.div`
  width: 1037px;
  height: 66px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterMediumMirage30px}
  height: 38px;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const Actions = styled.div`
  width: 163px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

export default BreadcrumbsFalseSupportingTextTrueS2;
