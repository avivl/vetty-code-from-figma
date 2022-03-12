import React from "react";
import styled from "styled-components";
import { InterNormalPaleSky16px } from "../../styledMixins";


class Text2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return <Paragraph className={`paragraph ${className || ""}`}>{children}</Paragraph>;
  }
}

const Paragraph = styled.p`
  ${InterNormalPaleSky16px}
  width: 904px;
  height: 272px;
  letter-spacing: 0;
  line-height: 24px;

  &.paragraph.paragraph-1 {
    height: 72px;
  }

  &.paragraph.paragraph-2 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-3 {
    height: 280px;
  }

  &.paragraph.paragraph-4 {
    height: 72px;
  }

  &.paragraph.paragraph-5 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-6 {
    height: 184px;
  }

  &.paragraph.text-10 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-11 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-12 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-13 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-14 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-15 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-16 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-17 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.supporting-text-1 {
    width: 1027px;
    height: 24px;
    margin-top: 4px;
    white-space: nowrap;
  }

  &.paragraph.paragraph-7 {
    width: 339px;
    height: 584px;
  }

  &.paragraph.paragraph-8 {
    width: 343px;
    height: 664px;
  }

  &.paragraph.paragraph-9 {
    width: 343px;
    height: 192px;
  }

  &.paragraph.paragraph-10 {
    width: 343px;
    height: 264px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-11 {
    width: 343px;
    height: 408px;
  }

  &.paragraph.text-18 {
    width: 318px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-19 {
    width: 318px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-20 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-21 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-22 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-23 {
    margin-top: 10px;
    width: 318px;
    height: 82px;
    margin-left: 14px;
  }

  &.paragraph.text-24 {
    margin-top: 10px;
    width: 318px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-25 {
    margin-top: 10px;
    width: 318px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-26 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-27 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-28 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.paragraph-13 {
    height: 72px;
  }

  &.paragraph.paragraph-14 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-15 {
    height: 280px;
  }

  &.paragraph.paragraph-16 {
    height: 72px;
  }

  &.paragraph.paragraph-17 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-18 {
    height: 184px;
  }

  &.paragraph.text-29 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-30 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-31 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-32 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-33 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-34 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-35 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-36 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-37 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-38 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-39 {
    width: 382px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-40 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-41 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-42 {
    margin-top: 10px;
    width: 876px;
    height: 108px;
    margin-left: 14px;
  }

  &.paragraph.text-43 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.paragraph-19 {
    width: 339px;
    height: 584px;
  }

  &.paragraph.paragraph-20 {
    width: 343px;
    height: 664px;
  }

  &.paragraph.paragraph-21 {
    width: 343px;
    height: 192px;
  }

  &.paragraph.paragraph-22 {
    width: 343px;
    height: 264px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-23 {
    width: 343px;
    height: 408px;
  }

  &.paragraph.text-44 {
    width: 318px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-45 {
    width: 318px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-46 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-47 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-48 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-49 {
    margin-top: 10px;
    width: 318px;
    height: 82px;
    margin-left: 14px;
  }

  &.paragraph.text-50 {
    margin-top: 10px;
    width: 318px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-51 {
    margin-top: 10px;
    width: 318px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.paragraph-24 {
    height: 72px;
  }

  &.paragraph.paragraph-25 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-26 {
    height: 280px;
  }

  &.paragraph.paragraph-27 {
    height: 72px;
  }

  &.paragraph.paragraph-28 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-29 {
    height: 184px;
  }

  &.paragraph.text-52 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-53 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-54 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-55 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-56 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-57 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-58 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-59 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.paragraph-30 {
    height: 72px;
  }

  &.paragraph.paragraph-31 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-32 {
    height: 280px;
  }

  &.paragraph.paragraph-33 {
    height: 72px;
  }

  &.paragraph.paragraph-34 {
    height: 120px;
    margin-top: 16px;
  }

  &.paragraph.paragraph-35 {
    height: 184px;
  }

  &.paragraph.text-60 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-61 {
    width: 406px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-62 {
    width: 124px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-63 {
    width: 169px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-64 {
    width: 227px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-65 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-66 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-67 {
    margin-top: 10px;
    width: 876px;
    height: 116px;
    margin-left: 14px;
  }

  &.paragraph.text-68 {
    width: 53px;
    height: 24px;
    margin-left: 8px;
    white-space: nowrap;
  }

  &.paragraph.text-69 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-70 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-71 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-72 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.text-73 {
    width: 332px;
    height: 24px;
    white-space: nowrap;
  }

  &.paragraph.supporting-text-2 {
    width: 1037px;
    height: 24px;
    margin-top: 4px;
    white-space: nowrap;
  }

  &.paragraph.supporting-text-3 {
    width: 1032px;
    height: 24px;
    margin-top: 4px;
    white-space: nowrap;
  }

  &.paragraph.supporting-text-4 {
    width: 1032px;
    height: 24px;
    margin-top: 4px;
    white-space: nowrap;
  }

  &.paragraph.supporting-text-5 {
    width: 1032px;
    height: 24px;
    margin-top: 4px;
    white-space: nowrap;
  }
`;

export default Text2;
