import React from "react";
import SupportingTextFalseTabsFalseActions from "../SupportingTextFalseTabsFalseActions";
import "./Section3.sass";

class Section3 extends React.Component {
  render() {
    const { className, supportingTextFalseTabsFalseActions } = this.props;

    return (
      <div className={`section-15 ${className || ""}`}>
        <div className="divider-15"></div>
        <div className="container-6">
          <SupportingTextFalseTabsFalseActions>
            {supportingTextFalseTabsFalseActions.children}
          </SupportingTextFalseTabsFalseActions>
          <div className="rich-text">
            <img className="section-16" src="/img/section-1@2x.svg" />
            <p className="paragraph-19 inter-normal-pale-sky-16px">
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
            </p>
            <div className="section-13">
              <div className="heading-6 inter-medium-mirage-16px">Screening Test (Paid)</div>
              <p className="paragraph-20 inter-normal-pale-sky-16px">
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
              </p>
              <div className="section-17 inter-normal-pale-sky-16px">
                <p className="paragraph-21">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
                  pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
                  fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
                  convallis risus.
                </p>
                <p className="paragraph-22">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                  <br />
                  Non pellentesque congue eget consectetur turpis.
                  <br />
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
                  tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                </p>
              </div>
            </div>
            <div className="section-13">
              <div className="heading-6 inter-medium-mirage-16px">Additional Notes</div>
              <p className="paragraph-23 inter-normal-pale-sky-16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sagittis, congue suspendisse purus
                venenatis orci scelerisque ut cursus. Quisque tincidunt sed massa odio odio augue scelerisque tincidunt.
                Ultrices egestas lacus enim magna. Venenatis nam tristique ultrices placerat sagittis, donec. Nunc,
                condimentum vestibulum blandit neque, turpis morbi. Nulla pellentesque gravida ornare odio enim viverra
                fringilla bibendum. Suscipit ornare vitae, curabitur cursus aliquam. Luctus non nunc non blandit non
                feugiat. Leo morbi sem pulvinar eu est malesuada. Tincidunt mi, mauris sed viverra facilisis eu, etiam.
                Tortor ipsum risus, dictumst id. Felis sed ornare tellus vulputate felis turpis volutpat est.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
