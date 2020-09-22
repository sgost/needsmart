import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  }
  input::-moz-focus-inner {
  border: 0;
  padding: 0;
  }
  input, select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  }
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  p {
  font-family: ${palette.CONTENT_FONT_FAMILY};
  font-size: 16px;
  line-height: 1.5;
  }
  
  .ant-message-notice {
    text-align: right;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.70) !important;
  }

  .ant-modal-content {
    border-radius: 8px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }
  .ant-select {
    width: 100% !important;
    max-width: 300px !important;
  }
  .ant-select-selection {
    min-height: 38px !important;
    display: flex !important;
    align-items: center !important;
    &:focus {
      border-color: #4255B9 !important;
      box-shadow: none !important;
    }
    &:hover {
      border-color: #4255B9 !important;
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }
  .ant-btn {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 8px !important;
    font-weight: normal !important;
    font-size: 16px !important;
    line-height: 24px !important;
    &.active, &:hover, &:focus {
      color: ${palette.BUTTON_PRIMARY_COLOR} !important;
      border-color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    }
  }
  .ant-btn-primary {
    height: 48px !important;
    background: ${palette.BUTTON_PRIMARY_COLOR} !important;
    border-color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    color: ${palette.WHITE_COLOR} !important;
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
    }
  }
  .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active {
    color: ${palette.WHITE_COLOR} !important;
    opacity: 0.5;
  }
  .ant-input {
    height: 48px !important;
    border-radius: 8px !important;
    border: transparent !important;
    font-weight: normal !important;
    font-size: 16px !important;
    line-height: 24px !important;
    color: ${palette.INPUT_TEXT} !important;
    background: ${palette.WHITE_COLOR};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    &:focus, &:hover, &:active {
      border: none !important;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .ant-modal-confirm-body-wrapper {
    padding: 25px;
  }
  .uppy-FileInput-btn {
    background-color: ${palette.APP_BRAND_COLOR};
    color: ${palette.WHITE_COLOR}
    border-radius: none;
  }

  .addBtn {
    border-color: ${palette.BUTTON_SEC_COLOR} !important;
    background: ${palette.BUTTON_SEC_COLOR} !important;
    border-radius: 4px !important;
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: 16px !important;
    text-transform: uppercase;
    color: ${palette.WHITE_COLOR} !important;
    &:hover, &:active {
      color: ${palette.WHITE_COLOR} !important;
      background: ${palette.BUTTON_SEC_COLOR} !important;
      border-color: ${palette.BUTTON_SEC_COLOR} !important;
    }
  }

  .customDrawer .ant-drawer-content-wrapper {
    width: 412px !important;
    @media only screen and (max-width: 769px) {
      width: 100% !important;
    }
    .ant-drawer-header {
      border-bottom: none;
    }
    .ant-drawer-title {
      margin-left: 22px;
      font-size: 20px;
      line-height: 30px;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    .ant-drawer-close {
      left: 0;
      top: 4px;
      color: ${palette.MD_GREY};
      font-size: 16px;
    }
  }

  .inputLabel {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
    display: inline-block;
    margin-bottom: 5px;
  }

  .otpInput {
    width: 36px !important;
    border: none;
    border-bottom: 1px solid ${palette.BUTTON_PRIMARY_COLOR};
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: ${palette.INPUT_TEXT};
    margin: 0px 8px;
  }
  .otpInputFocus {
    border: none;
    outline: none !important;
    border-bottom: 1px solid ${palette.BUTTON_PRIMARY_COLOR};
  }

  .unitModal {
    .ant-modal-content {
      max-width: 365px;
      margin: 0 auto;
    }
    .ant-modal-header {
      padding: 24px 24px 16px;
    }
    .ant-modal-title {
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.SECONDARY_TXT_COLOR};
      span {
        display: block;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: ${palette.DOVE_GRAY};
      }
    }
  }

  .checkoutCollapse {
    background-color: ${palette.WHITE_COLOR} !important;
    border: none !important;
    .ant-collapse-item {
      margin-bottom: 24px;
      background: ${palette.WHITE_COLOR};
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      border: none !important;
    }
    .ant-collapse-header {
      padding: 26px 48px !important;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px !important;
      color: ${palette.PRIMARY_TXT_COLOR} !important;
    }
    .ant-collapse-content {
      background-color: transparent;
      border-top: none;
      .ant-collapse-content-box {
        padding: 0px;
      }
    }
    .ant-collapse-item:last-child, .ant-collapse-item:last-child > .ant-collapse-header {
      border-radius: 8px !important;
    }
    .ant-collapse-extra {
      position: absolute;
      right: 48px;
      top: 26px;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: ${palette.BUTTON_PRIMARY_COLOR};
      text-transform: uppercase;
    }
  }

  .ant-radio-inner {
    border-color: ${palette.ML_GREY} !important;
    width: 20px !important;
    height: 20px !important;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${palette.ML_GREY} !important;
  }
  .ant-radio-inner::after {
    width: 10px !important;
    height: 10px !important;
    background-color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    top: 4px !important;
    left: 4px !important;
  }
  .ant-radio-checked::after {
    border: 1px solid ${palette.ML_GREY} !important;
  }
`;
