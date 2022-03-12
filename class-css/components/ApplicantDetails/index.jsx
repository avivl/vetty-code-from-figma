import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextLeadingIconFalseLabe2 from "../TypeLeadingTextLeadingIconFalseLabe2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import LabelTrueHintTextFalseDestructiveFa5 from "../LabelTrueHintTextFalseDestructiveFa5";
import LabelTrueHintTextFalseDestructiveFa6 from "../LabelTrueHintTextFalseDestructiveFa6";
import "./ApplicantDetails.css";

class ApplicantDetails extends React.Component {
  render() {
    const {
      supportingTextTrueTabsFalseActionsF,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextLeadingIconFalseLabe,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      labelTrueHintTextFalseDestructiveFa,
      labelTrueHintTextFalseDestructiveFa2,
      labelTrueHintTextFalseDestructiveFa3,
    } = this.props;

    return (
      <div className="applicant-details-1">
        <SupportingTextTrueTabsFalseActionsF className={supportingTextTrueTabsFalseActionsF.className}>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <div className="input-36">
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru.className}
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps}
          />
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru2.className}
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
          />
        </div>
        <div className="input-36">
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <TypeLeadingTextLeadingIconFalseLabe2
            className={typeLeadingTextLeadingIconFalseLabe.className}
            typeLeadingTextDestructiveFalse2Pro={
              typeLeadingTextLeadingIconFalseLabe.typeLeadingTextDestructiveFalse2Pro
            }
          />
          <StateDefaultTypeDefaultSupportingTe
            className={stateDefaultTypeDefaultSupportingTe.className}
            labelTrueTypeDefaultStateDefaultPro={
              stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefaultPro
            }
          />
        </div>
        <div className="input-dropdown-container">
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti2.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti2.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti3.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti3.labelTrueTypeDefaultStatePlaceholde
            }
          />
        </div>
        <LabelTrueHintTextFalseDestructiveFa5
          destructiveFalse32Props={labelTrueHintTextFalseDestructiveFa.destructiveFalse32Props}
        />
        <LabelTrueHintTextFalseDestructiveFa6
          destructiveFalse42Props={labelTrueHintTextFalseDestructiveFa2.destructiveFalse42Props}
        />
        <LabelTrueHintTextFalseDestructiveFa5
          className={labelTrueHintTextFalseDestructiveFa3.className}
          destructiveFalse32Props={labelTrueHintTextFalseDestructiveFa3.destructiveFalse32Props}
        />
      </div>
    );
  }
}

export default ApplicantDetails;
