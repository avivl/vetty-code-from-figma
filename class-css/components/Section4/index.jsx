import React from "react";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import Section from "../Section";
import Section5 from "../Section5";
import Text2 from "../Text2";
import "./Section4.css";

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
      <div className={`section-29 ${className || ""}`}>
        <div className="divider-16"></div>
        <div className="container-10">
          <SupportingTextFalseTabsFalseActions>
            {supportingTextFalseTabsFalseActions.children}
          </SupportingTextFalseTabsFalseActions>
          <div className="rich-text">
            <img className="section-30" src="/img/section-1@2x.png" />
            <div className="section-31">
              <Section className={sectionProps.className} text2Props={sectionProps.text2Props} />
            </div>
            <div className="section-27">
              <div className="heading-6 inter-medium-mirage-16px">Screening Test (Paid)</div>
              <Section5 text2Props={section51Props.text2Props} />
              <div className="section-32">
                <Text2 className={text21Props.className}>{text21Props.children}</Text2>
                <Text2 className={text22Props.className}>{text22Props.children}</Text2>
              </div>
            </div>
            <div className="section-27">
              <div className="heading-7 inter-medium-mirage-16px">Additional Notes</div>
              <Section5 className={section52Props.className} text2Props={section52Props.text2Props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
