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
  width: 840px;
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
  width: 312px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const CardHeader1 = styled.div`
  width: 1216px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Content1 = styled.div`
  width: 1216px;
  height: 79px;
  display: flex;
`;

const TextAndBadge1 = styled.div`
  margin-top: 26px;
  width: 840px;
  position: relative;
  margin-left: 24px;
  display: flex;
`;

const Text1 = styled.div`
  ${InterMediumMirage18px}
  width: 99px;
  height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Actions1 = styled.div`
  margin-top: 20px;
  width: 312px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const Divider1 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

const CardHeader2 = styled.div`
  width: 1216px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Content2 = styled.div`
  width: 1216px;
  height: 79px;
  display: flex;
`;

const TextAndBadge2 = styled.div`
  margin-top: 26px;
  width: 840px;
  position: relative;
  margin-left: 24px;
  display: flex;
`;

const Text2 = styled.div`
  ${InterMediumMirage18px}
  width: 99px;
  height: 28px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Actions2 = styled.div`
  margin-top: 20px;
  width: 312px;
  height: 40px;
  position: relative;
  margin-left: 16px;
  display: flex;
`;

const Divider2 = styled.div`
  height: 1px;
  background-color: var(--gallery);
`;

export default SupportingTextFalseStyleSimpleActio2;
