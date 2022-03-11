import React from "react";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import styled from "styled-components";
import { InterNormalPaleSky16px, InterMediumMirage16px } from "../../styledMixins";


class Section3 extends React.Component {
  render() {
    const { className, supportingTextFalseTabsFalseActions } = this.props;

    return (
      <Section className={`section-8 ${className || ""}`}>
        <Divider className="divider-8"></Divider>
        <Container className="container-4">
          <SupportingTextFalseTabsFalseActions>
            {supportingTextFalseTabsFalseActions.children}
          </SupportingTextFalseTabsFalseActions>
          <RichText className="rich-text">
            <Section1 className="section-9" src="/img/section-1@2x.svg" />
            <Paragraph className="paragraph-5">
              Google builds products that help create opportunities for everyone, whether they’re down the street or
              across the globe.
              <br />
              As a Technical Program Manager for mobile software engineering, you’ll manage the development of products
              that get our users the information they need, no matter where they are — including phones, tablets, TVs,
              wearable devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify
              risks, manage schedules, and communicate clearly with project stakeholders. And, thanks to Google’s
              industry leading benefits and ample opportunities for personal and professional development, you’ll learn
              and grow alongside talented teammates who share your attention to detail and appetite for problem-solving.
              <br />
              Candidates of all experience levels are encouraged to apply. We&#39;ll consider your experience to best
              match you with open roles.
            </Paragraph>
            <Section2 className="section-10">
              <Heading className="heading-3">Screening Test (Paid)</Heading>
              <Paragraph1 className="paragraph-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus
                venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt.
                Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc,
                condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra
                fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non
                feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam.
                Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est tristique.
                <br />
                Molestie vel, consectetur leo tortor, congue. Vitae justo, amet nisl quam quam morbi sagittis risus,
                est. Eget aliquet proin tincidunt faucibus ac tortor fringilla cras. Condimentum eleifend consequat
                amet, elit diam duis proin nunc, gravida. Amet facilisis sit sit fames cursus et, scelerisque. Ut varius
                vitae sed feugiat donec. Cras semper turpis non nunc. Posuere maecenas fermentum eu risus. Tempus est
                nulla elit arcu.
              </Paragraph1>
              <Section4 className="section-11">
                <Paragraph2 className="paragraph-7">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
                  pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
                  fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
                  convallis risus.
                </Paragraph2>
                <Paragraph3 className="paragraph-8">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                  <br />
                  Non pellentesque congue eget consectetur turpis.
                  <br />
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
                  tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                </Paragraph3>
              </Section4>
            </Section2>
            <Section2 className="section-12">
              <Heading className="heading-4">Additional Notes</Heading>
              <Paragraph4 className="paragraph-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus
                venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt.
                Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc,
                condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra
                fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non
                feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam.
                Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.
              </Paragraph4>
            </Section2>
          </RichText>
        </Container>
      </Section>
    );
  }
}

const Section = styled.div`
  width: 375px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2549px;

  &.section-8.section-13 {
    min-height: 2542px;
  }
`;

const Divider = styled.div`
  width: 375px;
  height: 1px;
  background-color: var(--mercury);
`;

const Container = styled.div`
  width: 375px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 4659px;
`;

const RichText = styled.div`
  width: 343px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1711px;
`;

const Section1 = styled.img`
  width: 343px;
  height: 104px;
`;

const Paragraph = styled.p`
  ${InterNormalPaleSky16px}
  width: 339px;
  min-height: 584px;
  margin-top: 32px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Section2 = styled.div`
  width: 343px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1210px;
`;

const Heading = styled.div`
  ${InterMediumMirage16px}
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Paragraph1 = styled.p`
  ${InterNormalPaleSky16px}
  width: 343px;
  min-height: 664px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Section4 = styled.div`
  ${InterNormalPaleSky16px}
  width: 343px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 265px;
`;

const Paragraph2 = styled.p`
  width: 343px;
  min-height: 192px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Paragraph3 = styled.p`
  width: 343px;
  min-height: 264px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Paragraph4 = styled.p`
  ${InterNormalPaleSky16px}
  width: 343px;
  min-height: 408px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 24px;
`;

const Container1 = styled.div`
  .section-8.section-13 & {
    min-height: 4458px;
  }
`;

export default Section3;
