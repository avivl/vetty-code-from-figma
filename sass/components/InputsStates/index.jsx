import React from "react";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import TypeDefaultLeadingIconFalseLabelTru4 from "../TypeDefaultLeadingIconFalseLabelTru4";
import TypeDefaultLeadingIconFalseLabelTru5 from "../TypeDefaultLeadingIconFalseLabelTru5";
import TypeDefaultLeadingIconFalseLabelTru6 from "../TypeDefaultLeadingIconFalseLabelTru6";
import LabelTrueHintTextFalseDestructiveFa3 from "../LabelTrueHintTextFalseDestructiveFa3";
import Text from "../Text";
import LabelTrueHintTextFalseDestructiveFa5 from "../LabelTrueHintTextFalseDestructiveFa5";
import LabelTrueHintTextTrueDestructiveTru from "../LabelTrueHintTextTrueDestructiveTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import StateDefaultTypeDefaultSupportingTe2 from "../StateDefaultTypeDefaultSupportingTe2";
import StateOpenfocusedTypeDefaultSupporti from "../StateOpenfocusedTypeDefaultSupporti";
import StateOpenfocusedTypeDefaultSupporti2 from "../StateOpenfocusedTypeDefaultSupporti2";
import "./InputsStates.sass";

class InputsStates extends React.Component {
  render() {
    const {
      label1,
      label2,
      label3,
      label4,
      label5,
      label6,
      label7,
      label8,
      label9,
      label10,
      label11,
      label12,
      typeDefaultLeadingIconFalseLabelTru1Props,
      typeDefaultLeadingIconFalseLabelTru41Props,
      typeDefaultLeadingIconFalseLabelTru42Props,
      typeDefaultLeadingIconFalseLabelTru2Props,
      typeDefaultLeadingIconFalseLabelTru5Props,
      typeDefaultLeadingIconFalseLabelTru6Props,
      labelTrueHintTextFalseDestructiveFa31Props,
      textProps,
      labelTrueHintTextFalseDestructiveFa5Props,
      labelTrueHintTextFalseDestructiveFa32Props,
      labelTrueHintTextTrueDestructiveTruProps,
      statePlaceholderTypeDefaultSupportiProps,
      stateDefaultTypeDefaultSupportingTe2Props,
      stateOpenfocusedTypeDefaultSupportiProps,
      stateOpenfocusedTypeDefaultSupporti2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="inputs-states screen">
          <div className="flex-row-1">
            <div className="flex-row-2 inter-semi-bold-oxford-blue-16px">
              <div className="label-container">
                <div className="label-42">{label1}</div>
                <div className="label-44">{label2}</div>
                <div className="label-45">{label3}</div>
                <div className="label-46">{label4}</div>
                <div className="label-47">{label5}</div>
                <div className="label-48">{label6}</div>
              </div>
              <div className="input-field-container">
                <TypeDefaultLeadingIconFalseLabelTru
                  typeDefaultDestructiveFalseProps={
                    typeDefaultLeadingIconFalseLabelTru1Props.typeDefaultDestructiveFalseProps
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru4
                  typeDefaultDestructiveFalse4Props={
                    typeDefaultLeadingIconFalseLabelTru41Props.typeDefaultDestructiveFalse4Props
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru4
                  typeDefaultDestructiveFalse4Props={
                    typeDefaultLeadingIconFalseLabelTru42Props.typeDefaultDestructiveFalse4Props
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru
                  className={typeDefaultLeadingIconFalseLabelTru2Props.className}
                  typeDefaultDestructiveFalseProps={
                    typeDefaultLeadingIconFalseLabelTru2Props.typeDefaultDestructiveFalseProps
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru5
                  typeDefaultDestructiveTrueProps={
                    typeDefaultLeadingIconFalseLabelTru5Props.typeDefaultDestructiveTrueProps
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru6
                  typeDefaultDestructiveFalse5Props={
                    typeDefaultLeadingIconFalseLabelTru6Props.typeDefaultDestructiveFalse5Props
                  }
                />
              </div>
              <div className="label-container-1">
                <div className="label-42">{label7}</div>
                <div className="label-49">{label8}</div>
                <div className="label-43">{label9}</div>
                <div className="label-43">{label10}</div>
                <div className="label-43">{label11}</div>
              </div>
            </div>
            <div className="textarea-input-field-container">
              <LabelTrueHintTextFalseDestructiveFa3
                className={labelTrueHintTextFalseDestructiveFa31Props.className}
                destructiveFalse3Props={labelTrueHintTextFalseDestructiveFa31Props.destructiveFalse3Props}
              />
              <div className="textarea-input-field-11">
                <p className="label-50 inter-medium-oxford-blue-14px">{label12}</p>
                <div className="input-33 border-1px-mischka">
                  <div className="overlap-group-17">
                    <Text className={textProps.className}>{textProps.children}</Text>
                    <div className="slider">
                      <div className="rectangle-126"></div>
                    </div>
                  </div>
                </div>
              </div>
              <LabelTrueHintTextFalseDestructiveFa5
                destructiveFalse5Props={labelTrueHintTextFalseDestructiveFa5Props.destructiveFalse5Props}
              />
              <LabelTrueHintTextFalseDestructiveFa3
                className={labelTrueHintTextFalseDestructiveFa32Props.className}
                destructiveFalse3Props={labelTrueHintTextFalseDestructiveFa32Props.destructiveFalse3Props}
              />
              <LabelTrueHintTextTrueDestructiveTru
                destructiveTrueProps={labelTrueHintTextTrueDestructiveTruProps.destructiveTrueProps}
              />
            </div>
          </div>
          <img className="line-1" src="/img/line-1@1x.svg" />
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupportiProps.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupportiProps.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <div className="flex-row-3">
            <StateDefaultTypeDefaultSupportingTe2
              labelTrueTypeDefaultStateDefault2Props={
                stateDefaultTypeDefaultSupportingTe2Props.labelTrueTypeDefaultStateDefault2Props
              }
            />
            <img className="tooltip" src="/img/tooltip@2x.svg" />
          </div>
          <div className="flex-row-4">
            <StateOpenfocusedTypeDefaultSupporti
              labelTrueTypeDefaultStateDefault2Props={
                stateOpenfocusedTypeDefaultSupportiProps.labelTrueTypeDefaultStateDefault2Props
              }
              typeDefaultSupportingTextFalseScrolProps={
                stateOpenfocusedTypeDefaultSupportiProps.typeDefaultSupportingTextFalseScrolProps
              }
            />
            <StateOpenfocusedTypeDefaultSupporti2
              labelTrueTypeDefaultStateDefault2Props={
                stateOpenfocusedTypeDefaultSupporti2Props.labelTrueTypeDefaultStateDefault2Props
              }
              typeDefaultSupportingTextFalseScrol2Props={
                stateOpenfocusedTypeDefaultSupporti2Props.typeDefaultSupportingTextFalseScrol2Props
              }
            />
            <img className="button-24" src="/img/button@2x.svg" />
            <img className="preference-4" src="/img/preference@2x.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default InputsStates;
