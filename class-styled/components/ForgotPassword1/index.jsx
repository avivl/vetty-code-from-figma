import React from "react";
import Header from "../Header";
import TypeDefaultLeadingIconFalseLabelTru2 from "../TypeDefaultLeadingIconFalseLabelTru2";
import SizelgHierarchyPrimaryIconFalseDest2 from "../SizelgHierarchyPrimaryIconFalseDest2";
import SizemdHierarchyLinkGrayIconLeadingD from "../SizemdHierarchyLinkGrayIconLeadingD";
import styled from "styled-components";
import "./ForgotPassword1.css";

class ForgotPassword1 extends React.Component {
  render() {
    const {
      headerProps,
      typeDefaultLeadingIconFalseLabelTru,
      sizelgHierarchyPrimaryIconFalseDest,
      sizemdHierarchyLinkGrayIconLeadingD,
    } = this.props;

    return (
      <div className="forgot-password-1 screen">
        <Content>
          <Header
            sizexlColorPrimaryThemeLightCircleO={headerProps.sizexlColorPrimaryThemeLightCircleO}
            textAndSupportingText3Props={headerProps.textAndSupportingText3Props}
          />
          <Content1>
            <Form>
              <TypeDefaultLeadingIconFalseLabelTru2
                typeDefaultDestructiveFalse2Props={
                  typeDefaultLeadingIconFalseLabelTru.typeDefaultDestructiveFalse2Props
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
  height: 376px;
  margin-left: 684px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content1 = styled.div`
  height: 138px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

const Form = styled.div`
  width: 360px;
  height: 70px;
  position: relative;
  display: flex;
`;

export default ForgotPassword1;
