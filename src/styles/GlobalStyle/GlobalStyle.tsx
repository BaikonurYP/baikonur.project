import { createGlobalStyle } from 'styled-components'

import SpaceFont from '../../vendor/fonts/spaceagecyrillic/spaceagecyrillic_regular.ttf'
import RobotoThin from '../../vendor/fonts/roboto/Roboto-Thin.ttf'
import RobotoThinItalic from '../../vendor/fonts/roboto/Roboto-ThinItalic.ttf'
import RobotoLight from '../../vendor/fonts/roboto/Roboto-Light.ttf'
import RobotoRegular from '../../vendor/fonts/roboto/Roboto-Regular.ttf'
import RobotoMedium from '../../vendor/fonts/roboto/Roboto-Medium.ttf'
import RobotoItalic from '../../vendor/fonts/roboto/Roboto-Italic.ttf'
import RobotoMediumItalic from '../../vendor/fonts/roboto/Roboto-MediumItalic.ttf'
import RobotoBold from '../../vendor/fonts/roboto/Roboto-Bold.ttf'
import RobotoBlack from '../../vendor/fonts/roboto/Roboto-Black.ttf'
import RobotoBlackItalic from '../../vendor/fonts/roboto/Roboto-BlackItalic.ttf'
import BGImage from '../../images/bg.jpg'
import { colors, getColor } from './colors'

const Global = createGlobalStyle`
  @font-face {
    font-family: 'SpaceFont';
    src: url(${SpaceFont}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalic}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalic}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalic}) format('woff2');
    font-weight: 900;
    font-style: italic;
  }

  :root {
    ${Object.keys(colors).map((k: keyof typeof colors) => {
        return `--${k}: ${colors[k]};`
    })}
  }

  * {
    box-sizing: border-box;
    
      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }

      body {
        margin: 0;
      }

      main {
        display: block;
      }

      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }

      hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
      }

      pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      a {
        background-color: transparent;
      }

      abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
      }

      b,
      strong {
        font-weight: bolder;
      }

      code,
      kbd,
      samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
      }

      button,
      input { /* 1 */
        overflow: visible;
      }

      button,
      select { /* 1 */
        text-transform: none;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }

      [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
      }


      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none;
      }
    
  }
`

export default Global
