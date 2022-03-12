import React from "react";
import styled from "styled-components";
import { InterMediumWhite16px } from "../../styledMixins";


class SizelgIconFalse3 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <button className={`button-base-33 ${className || ""}`}>
        <Text className="text-119">{children}</Text>
      </button>
    );
  }
}

const ButtonBase = styled.div`
  flex: 1;
  width: 360px;
  display: flex;
  background-color: var(--royal-blue);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 2px #1018280d;
`;

const Text = styled.div`
  ${InterMediumWhite16px}
  margin-top: 10px;
  width: 52px;
  height: 24px;
  margin-left: 154px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${InterMediumWhite16px}

  .button-base-33.button-base-34  & {
    width: 120px;
    margin-left: 120px;
  }
`;

const Text2 = styled.div`
  ${InterMediumWhite16px}

  .button-base-33.button-base-35  & {
    width: 123px;
    margin-left: 118.5px;
  }
`;

const Text3 = styled.div`
  ${InterMediumWhite16px}

  .button-base-33.button-base-36  & {
    width: 70px;
    margin-left: 145px;
  }
`;

const Text4 = styled.div`
  ${InterMediumWhite16px}

  .button-base-33.button-base-37  & {
    width: 123px;
    margin-left: 118.5px;
  }
`;

export default SizelgIconFalse3;
