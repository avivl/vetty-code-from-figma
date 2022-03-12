import React from "react";
import styled from "styled-components";
import { Border1pxMischka, InterMediumPaleSky14px } from "../../styledMixins";


class SizemdIconLeading extends React.Component {
  render() {
    return (
      <ButtonBase>
        <Calendar src="/img/calendar@2x.png" />
        <Text>Select date</Text>
      </ButtonBase>
    );
  }
}

const ButtonBase = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 136px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Calendar = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text = styled.div`
  ${InterMediumPaleSky14px}
  margin-top: 10px;
  width: 76px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase1 = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 136px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Calendar1 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text1 = styled.div`
  ${InterMediumPaleSky14px}
  margin-top: 10px;
  width: 76px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase2 = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 136px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Calendar2 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text2 = styled.div`
  ${InterMediumPaleSky14px}
  margin-top: 10px;
  width: 76px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ButtonBase3 = styled.div`
  ${Border1pxMischka}
  flex: 1;
  width: 136px;
  display: flex;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Calendar3 = styled.img`
  margin-top: 10px;
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;

const Text3 = styled.div`
  ${InterMediumPaleSky14px}
  margin-top: 10px;
  width: 76px;
  height: 20px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default SizemdIconLeading;
