import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import LabelTrueHintTextFalseDestructiveFa3 from "../LabelTrueHintTextFalseDestructiveFa3";
import LabelTrueHintTextFalseDestructiveFa4 from "../LabelTrueHintTextFalseDestructiveFa4";
import "./ApplicantDetails.sass";

class ApplicantDetails extends React.Component {
  render() {
    const {
      supportingTextTrueTabsFalseActionsFProps,
      typeDefaultLeadingIconFalseLabelTru1Props,
      typeDefaultLeadingIconFalseLabelTru2Props,
      statePlaceholderTypeDefaultSupporti1Props,
      typeLeadingTextDestructiveFalse2Props,
      stateDefaultTypeDefaultSupportingTeProps,
      statePlaceholderTypeDefaultSupporti2Props,
      statePlaceholderTypeDefaultSupporti3Props,
      labelTrueHintTextFalseDestructiveFa31Props,
      labelTrueHintTextFalseDestructiveFa4Props,
      labelTrueHintTextFalseDestructiveFa32Props,
    } = this.props;

    return (
      <div className="applicant-details-1">
        <SupportingTextTrueTabsFalseActionsF className={supportingTextTrueTabsFalseActionsFProps.className}>
          {supportingTextTrueTabsFalseActionsFProps.children}
        </SupportingTextTrueTabsFalseActionsF>
        <div className="input-31">
          <TypeDefaultLeadingIconFalseLabelTru
            typeDefaultDestructiveFalseProps={
              typeDefaultLeadingIconFalseLabelTru1Props.typeDefaultDestructiveFalseProps
            }
          />
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru2Props.className}
            typeDefaultDestructiveFalseProps={
              typeDefaultLeadingIconFalseLabelTru2Props.typeDefaultDestructiveFalseProps
            }
          />
        </div>
        <div className="input-31">
          <StatePlaceholderTypeDefaultSupporti
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti1Props.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <TypeLeadingTextDestructiveFalse2
            className={typeLeadingTextDestructiveFalse2Props.className}
            typeLeadingTextDestructiveFalseProp={
              typeLeadingTextDestructiveFalse2Props.typeLeadingTextDestructiveFalseProp
            }
          />
          <StateDefaultTypeDefaultSupportingTe
            className={stateDefaultTypeDefaultSupportingTeProps.className}
            labelTrueTypeDefaultStateDefaultPro={
              stateDefaultTypeDefaultSupportingTeProps.labelTrueTypeDefaultStateDefaultPro
            }
          />
        </div>
        <div className="input-dropdown-container">
          <StatePlaceholderTypeDefaultSupporti
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti2Props.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti3Props.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti3Props.labelTrueTypeDefaultStatePlaceholde
            }
          />
        </div>
        <LabelTrueHintTextFalseDestructiveFa3
          destructiveFalse3Props={labelTrueHintTextFalseDestructiveFa31Props.destructiveFalse3Props}
        />
        <LabelTrueHintTextFalseDestructiveFa4
          destructiveFalse4Props={labelTrueHintTextFalseDestructiveFa4Props.destructiveFalse4Props}
        />
        <LabelTrueHintTextFalseDestructiveFa3
          className={labelTrueHintTextFalseDestructiveFa32Props.className}
          destructiveFalse3Props={labelTrueHintTextFalseDestructiveFa32Props.destructiveFalse3Props}
        />
      </div>
    );
  }
}

export default ApplicantDetails;
