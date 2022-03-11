import React from "react";
import SupportingTextTrueTabsFalseActionsF from "../SupportingTextTrueTabsFalseActionsF";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import TypeLeadingTextDestructiveFalse2 from "../TypeLeadingTextDestructiveFalse2";
import StateDefaultTypeDefaultSupportingTe from "../StateDefaultTypeDefaultSupportingTe";
import DestructiveFalse32 from "../DestructiveFalse32";
import DestructiveFalse42 from "../DestructiveFalse42";
import styled from "styled-components";


class ApplicantDetails extends React.Component {
  render() {
    const {
      supportingTextTrueTabsFalseActionsF,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      statePlaceholderTypeDefaultSupporti,
      typeLeadingTextDestructiveFalse2Pro,
      stateDefaultTypeDefaultSupportingTe,
      statePlaceholderTypeDefaultSupporti2,
      statePlaceholderTypeDefaultSupporti3,
      destructiveFalse321Props,
      destructiveFalse42Props,
      destructiveFalse322Props,
    } = this.props;

    return (
      <ApplicantDetails1>
        <SupportingTextTrueTabsFalseActionsF className={supportingTextTrueTabsFalseActionsF.className}>
          {supportingTextTrueTabsFalseActionsF.children}
        </SupportingTextTrueTabsFalseActionsF>
        <InputFieldContainer>
          <TypeDefaultLeadingIconFalseLabelTru
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps}
          />
          <TypeDefaultLeadingIconFalseLabelTru
            className={typeDefaultLeadingIconFalseLabelTru2.className}
            typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
          />
        </InputFieldContainer>
        <InputFieldContainer>
          <StatePlaceholderTypeDefaultSupporti
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <TypeLeadingTextDestructiveFalse2
            className={typeLeadingTextDestructiveFalse2Pro.className}
            typeLeadingTextDestructiveFalseProp={
              typeLeadingTextDestructiveFalse2Pro.typeLeadingTextDestructiveFalseProp
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
        <DestructiveFalse32 inputWithLabel2Props={destructiveFalse321Props.inputWithLabel2Props} />
        <DestructiveFalse42 inputProps={destructiveFalse42Props.inputProps} />
        <DestructiveFalse32
          className={destructiveFalse322Props.className}
          inputWithLabel2Props={destructiveFalse322Props.inputWithLabel2Props}
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
