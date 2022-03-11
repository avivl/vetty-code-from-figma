import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru3 from "../TypeDefaultLeadingIconFalseLabelTru3";
import TypeDefaultLeadingIconFalseLabelTru from "../TypeDefaultLeadingIconFalseLabelTru";
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
      <div className="container-center-horizontal">
        <div className="forgot-password-3 screen">
          <Header
            className={headerProps.className}
            sizexlColorPrimaryThemeLightCircleO={headerProps.sizexlColorPrimaryThemeLightCircleO}
            textAndSupportingText3Props={headerProps.textAndSupportingText3Props}
          />
          <Content>
            <Form>
              <TypeDefaultLeadingIconFalseLabelTru3
                className={typeDefaultLeadingIconFalseLabelTru.className}
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
                }
              />
              <TypeDefaultLeadingIconFalseLabelTru
                className={typeDefaultLeadingIconFalseLabelTru2.className}
                typeDefaultDestructiveFalseProps={typeDefaultLeadingIconFalseLabelTru2.typeDefaultDestructiveFalseProps}
              />
            </Form>
            <SizelgHierarchyPrimaryIconFalseDest2
              className={sizelgHierarchyPrimaryIconFalseDest.className}
              sizelgIconFalseProps={sizelgHierarchyPrimaryIconFalseDest.sizelgIconFalseProps}
            />
          </Content>
          <SizemdHierarchyLinkGrayIconLeadingD
            className={sizemdHierarchyLinkGrayIconLeadingD.className}
            sizemdIconLeading3Props={sizemdHierarchyLinkGrayIconLeadingD.sizemdIconLeading3Props}
          />
        </div>
      </div>
    );
  }
}

const Content = styled.div`
  width: 360px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;
  border-radius: 12px;
`;

const Form = styled.div`
  width: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 186px;
`;

export default ForgotPassword3;
