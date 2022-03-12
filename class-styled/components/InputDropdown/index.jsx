import React from "react";
import OpenedFalseTypeSingleDateStatePlace from "../OpenedFalseTypeSingleDateStatePlace";
import styled from "styled-components";
import { InterNormalOxfordBlue14px } from "../../styledMixins";


class InputDropdown extends React.Component {
  render() {
    return (
      <InputDropdown1>
        <InputDropdownBase>
          <InputWithLabel>
            <Label>Estimated start date</Label>
            <OpenedFalseTypeSingleDateStatePlace />
          </InputWithLabel>
        </InputDropdownBase>
      </InputDropdown1>
    );
  }
}

const InputDropdown1 = styled.div`
  width: 136px;
  height: 70px;
  display: flex;
`;

const InputDropdownBase = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel = styled.div`
  width: 136px;
  height: 66px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  ${InterNormalOxfordBlue14px}
  width: 135px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const InputDropdown2 = styled.div`
  width: 136px;
  height: 70px;
  display: flex;
`;

const InputDropdownBase1 = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel1 = styled.div`
  width: 136px;
  height: 66px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label1 = styled.div`
  ${InterNormalOxfordBlue14px}
  width: 135px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const InputDropdown3 = styled.div`
  width: 136px;
  height: 70px;
  display: flex;
`;

const InputDropdownBase2 = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel2 = styled.div`
  width: 136px;
  height: 66px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label2 = styled.div`
  ${InterNormalOxfordBlue14px}
  width: 135px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const InputDropdown4 = styled.div`
  width: 136px;
  height: 70px;
  display: flex;
`;

const InputDropdownBase3 = styled.div`
  flex: 1;
  display: flex;
`;

const InputWithLabel3 = styled.div`
  width: 136px;
  height: 66px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label3 = styled.div`
  ${InterNormalOxfordBlue14px}
  width: 135px;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default InputDropdown;
