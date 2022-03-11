import React from "react";
import SizesmIconFalseColorPrimary from "../SizesmIconFalseColorPrimary";
import SizemdHierarchySecondaryGrayIconLea2 from "../SizemdHierarchySecondaryGrayIconLea2";
import SizemdHierarchyPrimaryIconLeadingDe from "../SizemdHierarchyPrimaryIconLeadingDe";
import styled from "styled-components";
import { InterMediumMirage18px } from "../../styledMixins";


class SupportingTextFalseStyleSimpleActio2 extends React.Component {
  render() {
    const { sizesmIconFalseColorPrimaryProps, sizemdHierarchySecondaryGrayIconLea } = this.props;

    return (
      <CardHeader>
        <Content>
          <TextAndBadge>
            <Text>Candidates</Text>
            <SizesmIconFalseColorPrimary
              className={sizesmIconFalseColorPrimaryProps.className}
              iconFalseProps={sizesmIconFalseColorPrimaryProps.iconFalseProps}
            />
          </TextAndBadge>
          <Actions>
            <SizemdHierarchySecondaryGrayIconLea2
              className={sizemdHierarchySecondaryGrayIconLea.className}
              sizemdIconLeading2Props={sizemdHierarchySecondaryGrayIconLea.sizemdIconLeading2Props}
            />
            <SizemdHierarchyPrimaryIconLeadingDe />
          </Actions>
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
  min-width: 840px;
`;

const Text = styled.div`
  ${InterMediumMirage18px}
  min-height: 28px;
  min-width: 99px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Actions = styled.div`
  height: 40px;
  position: relative;
  align-self: flex-end;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 312px;
`;

const Divider = styled.div`
  width: 1216px;
  height: 1px;
  background-color: var(--gallery);
`;

const CardHeader1 = styled.div`
  width: 1216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80px;
  background-color: var(--white);
`;

const Content1 = styled.div`
  height: 79px;
  display: flex;
  padding: 19px 24px;
  align-items: center;
  min-width: 1216px;
`;

const TextAndBadge1 = styled.div`
  height: 28px;
  position: relative;
  margin-top: 1px;
  display: flex;
  align-items: center;
  min-width: 840px;
`;

const Text1 = styled.div`
  ${InterMediumMirage18px}
  min-height: 28px;
  min-width: 99px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Actions1 = styled.div`
  height: 40px;
  position: relative;
  align-self: flex-end;
  margin-left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 312px;
`;

const Divider1 = styled.div`
  width: 1216px;
  height: 1px;
  background-color: var(--gallery);
`;

export default SupportingTextFalseStyleSimpleActio2;
