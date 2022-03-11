import React from "react";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import styled from "styled-components";
import { InterMediumMirage24px, InterNormalPaleSky16px } from "../../styledMixins";


class BreadcrumbsFalseSupportingTextTrueS3 extends React.Component {
  render() {
    const { className, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <PageHeader className={`page-header-4 ${className || ""}`}>
        <TextAndSupportingText className="text-and-supporting-text-11">
          <Text className="text-79">Technical Program Manager, Mobile Software Engineering</Text>
          <SupportingText className="supporting-text-12">
            Track your candidates that came from your advertised links.
          </SupportingText>
        </TextAndSupportingText>
        <SizemdHierarchySecondaryGrayIconLea2
          className={sizemdHierarchySecondaryGrayIconLea.className}
          sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
        />
      </PageHeader>
    );
  }
}

const PageHeader = styled.div`
  height: 60px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 1216px;

  &.page-header-4.page-header-5 {
    align-self: center;
  }
`;

const TextAndSupportingText = styled.div`
  width: 1032px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const Text = styled.div`
  ${InterMediumMirage24px}
  min-height: 32px;
  letter-spacing: 0;
  line-height: 32px;
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

export default BreadcrumbsFalseSupportingTextTrueS3;
