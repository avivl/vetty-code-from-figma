import React from "react";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
import TypeDefaultLeadingIconFalseLabelTru4 from "../TypeDefaultLeadingIconFalseLabelTru4";
import TypeDefaultLeadingIconFalseLabelTru5 from "../TypeDefaultLeadingIconFalseLabelTru5";
import TypeDefaultLeadingIconFalseLabelTru6 from "../TypeDefaultLeadingIconFalseLabelTru6";
import LabelTrueHintTextFalseDestructiveFa5 from "../LabelTrueHintTextFalseDestructiveFa5";
import Text from "../Text";
import LabelTrueHintTextFalseDestructiveFa7 from "../LabelTrueHintTextFalseDestructiveFa7";
import LabelTrueHintTextTrueDestructiveTru from "../LabelTrueHintTextTrueDestructiveTru";
import StatePlaceholderTypeDefaultSupporti from "../StatePlaceholderTypeDefaultSupporti";
import StateDefaultTypeDefaultSupportingTe3 from "../StateDefaultTypeDefaultSupportingTe3";
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
      line1,
      tooltip,
      button,
      preference,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      typeDefaultLeadingIconFalseLabelTru3,
      typeDefaultLeadingIconFalseLabelTru4,
      typeDefaultLeadingIconFalseLabelTru5,
      typeDefaultLeadingIconFalseLabelTru6,
      labelTrueHintTextFalseDestructiveFa,
      textProps,
      labelTrueHintTextFalseDestructiveFa2,
      labelTrueHintTextFalseDestructiveFa3,
      labelTrueHintTextTrueDestructiveTru,
      statePlaceholderTypeDefaultSupporti,
      stateDefaultTypeDefaultSupportingTe,
      stateOpenfocusedTypeDefaultSupporti,
      stateOpenfocusedTypeDefaultSupporti2,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="inputs-states screen">
          <div className="flex-row-1">
            <div className="flex-row-2 inter-semi-bold-oxford-blue-16px">
              <div className="label-container">
                <div className="label-40">{label1}</div>
                <div className="label-42">{label2}</div>
                <div className="label-43">{label3}</div>
                <div className="label-44">{label4}</div>
                <div className="label-45">{label5}</div>
                <div className="label-46">{label6}</div>
              </div>
              <div className="input-field-container">
                <TypeDefaultLeadingIconFalseLabelTru
                  className={typeDefaultLeadingIconFalseLabelTru.className}
                  typeDefaultDestructiveFalseProps={
                    typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalseProps
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru4
                  typeDefaultDestructiveFalse4Props={
                    typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse4Props
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru4
                  typeDefaultDestructiveFalse4Props={
                    typeDefaultLeadingIconFalseLabelTru3.typeDefaultDestructiveFalse4Props
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru
                  className={typeDefaultLeadingIconFalseLabelTru4.className}
                  typeDefaultDestructiveFalseProps={
                    typeDefaultLeadingIconFalseLabelTru4.typeDefaultDestructiveFalseProps
                  }
                />
                <TypeDefaultLeadingIconFalseLabelTru5
                  typeDefaultDestructiveTrueProps={typeDefaultLeadingIconFalseLabelTru5.typeDefaultDestructiveTrueProps}
                />
                <TypeDefaultLeadingIconFalseLabelTru6
                  typeDefaultDestructiveFalse5Props={
                    typeDefaultLeadingIconFalseLabelTru6.typeDefaultDestructiveFalse5Props
                  }
                />
              </div>
              <div className="label-container-1">
                <div className="label-40">{label7}</div>
                <div className="label-47">{label8}</div>
                <div className="label-41">{label9}</div>
                <div className="label-41">{label10}</div>
                <div className="label-41">{label11}</div>
              </div>
            </div>
            <div className="textarea-input-field-container">
              <LabelTrueHintTextFalseDestructiveFa5
                className={labelTrueHintTextFalseDestructiveFa.className}
                destructiveFalse32Props={labelTrueHintTextFalseDestructiveFa.destructiveFalse32Props}
              />
              <div className="textarea-input-field-15">
                <div className="textarea-input-field-base-13">
                  <div className="input-with-label-44">
                    <p className="label-48 inter-medium-oxford-blue-14px">{label12}</p>
                    <div className="input-38 border-1px-mischka">
                      <div className="overlap-group-18">
                        <Text className={textProps.className}>{textProps.children}</Text>
                        <div className="slider">
                          <div className="rectangle-126"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LabelTrueHintTextFalseDestructiveFa7
                destructiveFalse52Props={labelTrueHintTextFalseDestructiveFa2.destructiveFalse52Props}
              />
              <LabelTrueHintTextFalseDestructiveFa5
                className={labelTrueHintTextFalseDestructiveFa3.className}
                destructiveFalse32Props={labelTrueHintTextFalseDestructiveFa3.destructiveFalse32Props}
              />
              <LabelTrueHintTextTrueDestructiveTru
                destructiveTrueProps={labelTrueHintTextTrueDestructiveTru.destructiveTrueProps}
              />
            </div>
          </div>
          <img className="line-1" src={line1} />
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <div className="flex-row-3">
            <StateDefaultTypeDefaultSupportingTe3
              labelTrueTypeDefaultStateDefault3Pr={
                stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefault3Pr
              }
            />
            <img className="tooltip" src={tooltip} />
          </div>
          <div className="flex-row-4">
            <StateOpenfocusedTypeDefaultSupporti
              labelTrueTypeDefaultStateDefault3Pr={
                stateOpenfocusedTypeDefaultSupporti.labelTrueTypeDefaultStateDefault3Pr
              }
              typeDefaultSupportingTextFalseScrol={
                stateOpenfocusedTypeDefaultSupporti.typeDefaultSupportingTextFalseScrol
              }
            />
            <StateOpenfocusedTypeDefaultSupporti2
              labelTrueTypeDefaultStateDefault3Pr={
                stateOpenfocusedTypeDefaultSupporti2.labelTrueTypeDefaultStateDefault3Pr
              }
              typeDefaultSupportingTextFalseScrol={
                stateOpenfocusedTypeDefaultSupporti2.typeDefaultSupportingTextFalseScrol
              }
            />
            <img className="button-26" src={button} />
            <img className="preference-2" src={preference} />
          </div>
        </div>
      </div>
    );
  }
}

export default InputsStates;
