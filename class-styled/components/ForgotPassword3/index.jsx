import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import styled from "styled-components";
import "./ForgotPassword3.css";

class ForgotPassword3 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTru,
      typeDefaultLeadingIconFalseLabelTru2,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-3 screen">
        <Content>
          <Header
            className={headerProps.className}
            sizexlColorPrimaryThemeLightCircleO={headerProps.sizexlColorPrimaryThemeLightCircleO}
            textAndSupportingText3Props={headerProps.textAndSupportingText3Props}
          />
          <Content1>
            <Form>
              <TypeDefaultLeadingIconFalseLabelTru3
                className={typeDefaultLeadingIconFalseLabelTru.className}
                typeDefaultDestructiveFalse3Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse3Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru2
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalse2Props
                }
              />
            </Form>
            <SizelgHierarchyPrimaryIconFalseDest2
              className={sizelgHierarchyPrimaryIconFalseDest.className}
              sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
            />
          </Content1>
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingD.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
          />
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-top: 96px;
  width: 360px;
  height: 516px;
  margin-left: 684px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content1 = styled.div`
  height: 254px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

const Form = styled.div`
  width: 360px;
  height: 186px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default ForgotPassword3;
