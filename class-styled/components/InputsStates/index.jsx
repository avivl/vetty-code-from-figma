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
import styled from "styled-components";
import { InterMediumOxfordBlue14px, InterSemiBoldOxfordBlue16px, Border1pxMischka } from "../../styledMixins";
import "./InputsStates.css";

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
          <FlexRow>
            <FlexRow1>
              <LabelContainer>
                <Label>{label1}</Label>
                <Label1>{label2}</Label1>
                <Label2>{label3}</Label2>
                <Label3>{label4}</Label3>
                <Label4>{label5}</Label4>
                <Label5>{label6}</Label5>
              </LabelContainer>
              <InputFieldContainer>
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
              </InputFieldContainer>
              <LabelContainer1>
                <Label>{label7}</Label>
                <Label6>{label8}</Label6>
                <Label7>{label9}</Label7>
                <Label7>{label10}</Label7>
                <Label7>{label11}</Label7>
              </LabelContainer1>
            </FlexRow1>
            <TextareaInputFieldContainer>
              <LabelTrueHintTextFalseDestructiveFa5
                className={labelTrueHintTextFalseDestructiveFa.className}
                destructiveFalse32Props={labelTrueHintTextFalseDestructiveFa.destructiveFalse32Props}
              />
              <TextareaInputField>
                <TextareaInputFieldBase>
                  <InputWithLabel>
                    <Label8>{label12}</Label8>
                    <Input>
                      <OverlapGroup>
                        <Text className={textProps.className}>{textProps.children}</Text>
                        <Slider>
                          <Rectangle126></Rectangle126>
                        </Slider>
                      </OverlapGroup>
                    </Input>
                  </InputWithLabel>
                </TextareaInputFieldBase>
              </TextareaInputField>
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
            </TextareaInputFieldContainer>
          </FlexRow>
          <Line1 src={line1} />
          <StatePlaceholderTypeDefaultSupporti
            className={statePlaceholderTypeDefaultSupporti.className}
            labelTrueTypeDefaultStatePlaceholde={
              statePlaceholderTypeDefaultSupporti.labelTrueTypeDefaultStatePlaceholde
            }
          />
          <FlexRow2>
            <StateDefaultTypeDefaultSupportingTe3
              labelTrueTypeDefaultStateDefault3Pr={
                stateDefaultTypeDefaultSupportingTe.labelTrueTypeDefaultStateDefault3Pr
              }
            />
            <Tooltip src={tooltip} />
          </FlexRow2>
          <FlexRow3>
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
            <Button src={button} />
            <Preference src={preference} />
          </FlexRow3>
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 980px;
  align-self: center;
  margin-right: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 1745px;
`;

const FlexRow1 = styled.div`
  ${InterSemiBoldOxfordBlue16px}
  height: 898px;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 818px;
`;

const LabelContainer = styled.div`
  width: 111px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 488px;
`;

const Label = styled.div`
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  min-height: 24px;
  margin-top: 60px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label2 = styled.div`
  min-height: 24px;
  margin-top: 57px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label3 = styled.div`
  min-height: 24px;
  margin-top: 63px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label4 = styled.div`
  min-height: 24px;
  margin-top: 72px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label5 = styled.div`
  min-height: 24px;
  margin-top: 92px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const InputFieldContainer = styled.div`
  width: 434px;
  position: relative;
  margin-left: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 534px;
`;

const LabelContainer1 = styled.div`
  width: 92px;
  align-self: flex-end;
  margin-left: 105px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 823px;
`;

const Label6 = styled.div`
  min-height: 24px;
  margin-top: 190px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Label7 = styled.div`
  min-height: 24px;
  margin-top: 171px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const TextareaInputFieldContainer = styled.div`
  width: 904px;
  position: relative;
  margin-left: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 980px;
`;

const TextareaInputField = styled.div`
  width: 904px;
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextareaInputFieldBase = styled.div`
  width: 904px;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 904px;
  height: 162px;
  display: flex;
  flex-direction: column;
`;

const Label8 = styled.p`
  ${InterMediumOxfordBlue14px}
  width: 201px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Input = styled.div`
  ${Border1pxMischka}
  width: 904px;
  height: 136px;
  margin-top: 6px;
  display: flex;
  padding: 0 6px;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const OverlapGroup = styled.div`
  width: 884px;
  height: 120px;
  position: relative;
  margin-left: 8px;
`;

const Slider = styled.div`
  position: absolute;
  width: 120px;
  height: 4px;
  top: 58px;
  left: 822px;
  display: flex;
  background-color: #f0effb;
  border-radius: 200px;
  transform: rotate(90deg);
`;

const Rectangle126 = styled.div`
  margin-top: 0;
  width: 35.8193244934082px;
  height: 3.9999988079071045px;
  margin-left: 21.5px;
  background-color: #a49df5;
  border-radius: 200px;
`;

const Line1 = styled.img`
  width: 1925px;
  height: 1px;
  margin-top: 98px;
`;

const FlexRow2 = styled.div`
  height: 118px;
  position: relative;
  margin-top: 37px;
  margin-left: 116px;
  display: flex;
  align-items: flex-start;
  min-width: 1131px;
`;

const Tooltip = styled.img`
  width: 135px;
  height: 64px;
  align-self: flex-end;
  margin-left: 562px;
`;

const FlexRow3 = styled.div`
  height: 278px;
  position: relative;
  align-self: center;
  margin-right: 116px;
  display: flex;
  align-items: flex-start;
  min-width: 1577px;
`;

const Button = styled.img`
  width: 157px;
  height: 260px;
  align-self: flex-end;
  margin-left: 55px;
`;

const Preference = styled.img`
  width: 400px;
  height: 240px;
  align-self: center;
  margin-left: 38px;
  margin-bottom: 6px;
`;

export default InputsStates;
