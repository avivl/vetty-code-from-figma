import React from "react";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import styled from "styled-components";
import { InterNormalPaleSky16px, InterMediumMirage30px } from "../../styledMixins";


class BreadcrumbsFalseSupportingTextTrueS extends React.Component {
  render() {
    const { text, supportingText, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <PageHeader>
        <TextAndSupportingText>
          <Text>{text}</Text>
          <SupportingText>{supportingText}</SupportingText>
        </TextAndSupportingText>
        <SizemdHierarchySecondaryGrayIconLea2
          sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
        />
      </PageHeader>
    );
  }
}

const PageHeader = styled.div`
  height: 66px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1216px;
`;

const TextAndSupportingText = styled.div`
  width: 1027px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 66px;
`;

const Text = styled.div`
  ${InterMediumMirage30px}
  min-height: 38px;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const SupportingText = styled.p`
  ${InterNormalPaleSky16px}
  min-height: 24px;
  margin-top: 4px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default BreadcrumbsFalseSupportingTextTrueS;
