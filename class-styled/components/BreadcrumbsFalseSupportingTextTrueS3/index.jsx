import React from "react";
import Text2 from "../Text2";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import styled from "styled-components";
import { InterMediumMirage24px } from "../../styledMixins";


class BreadcrumbsFalseSupportingTextTrueS3 extends React.Component {
  render() {
    const { text2Props, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <PageHeader>
        <Content>
          <TextAndSupportingText>
            <Text>Technical Program Manager, Mobile Software Engineering</Text>
            <Text2 className={text2Props.className}>{text2Props.children}</Text2>
          </TextAndSupportingText>
          <Actions>
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
          </Actions>
        </Content>
      </PageHeader>
    );
  }
}

const PageHeader = styled.div`
  width: 1216px;
  margin-top: 24px;
  display: flex;
`;

const Content = styled.div`
  width: 1216px;
  display: flex;
`;

const TextAndSupportingText = styled.div`
  width: 1032px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Actions = styled.div`
  width: 168px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const PageHeader1 = styled.div`
  width: 1216px;
  margin-top: 24px;
  display: flex;
`;

const Content1 = styled.div`
  width: 1216px;
  display: flex;
`;

const TextAndSupportingText1 = styled.div`
  width: 1032px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  ${InterMediumMirage24px}
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Actions1 = styled.div`
  width: 168px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const PageHeader2 = styled.div`
  width: 1216px;
  margin-top: 24px;
  display: flex;
`;

const Content2 = styled.div`
  width: 1216px;
  display: flex;
`;

const TextAndSupportingText2 = styled.div`
  width: 1032px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text3 = styled.div`
  ${InterMediumMirage24px}
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Actions2 = styled.div`
  width: 168px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

export default BreadcrumbsFalseSupportingTextTrueS3;
