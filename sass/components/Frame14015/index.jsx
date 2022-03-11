import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import Section22 from "../Section22";
import "./Frame14015.sass";

class Frame14015 extends React.Component {
  render() {
    const { supportingTextTrueTabsFalseActionsF } = this.props;

    return (
      <div className="frame-14015">
        <SupportingTextTrueTabsFalseActionsF>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <img className="section" src="/img/section@1x.svg" />
        <p className="paragraph inter-normal-pale-sky-16px">
          Google builds products that help create opportunities for everyone, whether they’re down the street or across
          the globe.
          <br />
          As a Technical Program Manager for mobile software engineering, you’ll manage the development of products that
          get our users the information they need, no matter where they are — including phones, tablets, TVs, wearable
          devices, cars, and the Internet of Things. In this role, you’ll plan requirements, identify risks, manage
          schedules, and communicate clearly with project stakeholders. And, thanks to Google’s industry leading
          benefits and ample opportunities for personal and professional development, you’ll learn and grow alongside
          talented teammates who share your attention to detail and appetite for problem-solving.
          <br />
          Candidates of all experience levels are encouraged to apply. We&#39;ll consider your experience to best match
          you with open roles.
        </p>
        <Section22 />
      </div>
    );
  }
}

export default Frame14015;
