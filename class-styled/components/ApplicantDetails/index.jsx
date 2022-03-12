import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextLeadingIconFalseLabe2 from "../TypeLeadingTextLeadingIconFalseLabe2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import LabelTrueHintTextFalseDestructiveFa5 from "../LabelTrueHintTextFalseDestructiveFa5";
import LabelTrueHintTextFalseDestructiveFa6 from "../LabelTrueHintTextFalseDestructiveFa6";
import styled from "styled-components";


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
      <ApplicantDetails1>
        <SupportingTextTrueTabsFalseActionsF className={supportingTextTrueTabsFalseActionsF.className}>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <InputFieldContainer>
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru.className}
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps}
          />
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru2.className}
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
          />
        </InputFieldContainer>
        <InputFieldContainer>
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
        </InputFieldContainer>
        <InputDropdownContainer>
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
        </InputDropdownContainer>
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
      </ApplicantDetails1>
    );
  }
}

const ApplicantDetails1 = styled.div`
  width: 906px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 918px;
`;

const InputFieldContainer = styled.div`
  height: 70px;
  position: relative;
  margin-top: 30px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

const InputDropdownContainer = styled.div`
  height: 70px;
  position: relative;
  margin-top: 30px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 903px;
`;

const ApplicantDetails2 = styled.div`
  width: 906px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 918px;
`;

const InputFieldContainer1 = styled.div`
  height: 70px;
  position: relative;
  margin-top: 30px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 904px;
`;

const InputDropdownContainer1 = styled.div`
  height: 70px;
  position: relative;
  margin-top: 30px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 903px;
`;

export default ApplicantDetails;
