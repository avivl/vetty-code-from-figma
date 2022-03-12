import React from "react";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import Section from "../Section";
import Section5 from "../Section5";
import Text2 from "../Text2";
import styled from "styled-components";
import { InterMediumMirage16px } from "../../styledMixins";


class Section4 extends React.Component {
  render() {
    const {
      className,
      supportingTextFalseTabsFalseActions,
      sectionProps,
      section51Props,
      text21Props,
      text22Props,
      section52Props,
    } = this.props;

    return (
      <Section1 className={`section-22 ${className || ""}`}>
        <Divider className="divider-8"></Divider>
        <Container className="container-7">
          <SupportingTextFalseTabsFalseActions>
            {supportingTextFalseTabsFalseActions.children}
          </SupportingTextFalseTabsFalseActions>
          <RichText className="rich-text">
            <Section2 className="section-23" src="/img/section-1@2x.png" />
            <Section3 className="section-24">
              <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
            </Section3>
            <Section6 className="section-25">
              <Heading className="heading-3">Screening Test (Paid)</Heading>
              <Section5 text2Props={section51Props.text2Props} />
              <Section7 className="section-26">
                <Text2 className={text21Props.className}>{text21Props.children}</Text2>
                <Text2 className={text22Props.className}>{text22Props.children}</Text2>
              </Section7>
            </Section6>
            <Section6 className="section-27">
              <Heading1 className="heading-4">Additional Notes</Heading1>
              <Section5 className={section52Props.className} text2Props={section52Props.text2Props} />
            </Section6>
          </RichText>
        </Container>
      </Section1>
    );
  }
}

const Section1 = styled.div`
  width: 375px;
  height: 2549px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  &.section-22.section-28 {
    height: 2542px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--mercury);
`;

const Container = styled.div`
  height: 4659px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const RichText = styled.div`
  margin-left: 16px;
  width: 343px;
  height: 1711px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const Section2 = styled.img`
  width: 343px;
  height: 104px;
`;

const Section3 = styled.div`
  width: 343px;
  height: 584px;
  position: relative;
  margin-top: 32px;
  display: flex;
`;

const Section6 = styled.div`
  height: 1210px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  ${InterMediumMirage16px}
  width: 164px;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Section7 = styled.div`
  width: 343px;
  height: 265px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Heading1 = styled.div`
  ${InterMediumMirage16px}
  width: 343px;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Container1 = styled.div`
  .section-22.section-28 & {
    height: 4458px;
  }
`;

export default Section4;
