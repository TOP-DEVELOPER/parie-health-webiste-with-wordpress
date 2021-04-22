import { Global, css, connect } from "frontity";
import DmRegular from "../../../fonts/dm-sans-v6-latin-regular.woff2";
import DmMedium from "../../../fonts/dm-sans-v6-latin-500.woff2";
import DmBold from "../../../fonts/dm-sans-v6-latin-700.woff2";

import GeorgiaRegular from "../../../fonts/georgia_regular_font-webfont.woff2";
import GeorgiaItalic from "../../../fonts/georgia_italic-webfont.woff2";
import GeorgiaBold from "../../../fonts/georgia_bold-webfont.woff2";


const fonts = {
  "us-ascii": [DmRegular, DmMedium, DmBold, GeorgiaRegular, GeorgiaItalic, GeorgiaBold],
  latin: [DmRegular, DmMedium, DmBold, GeorgiaRegular, GeorgiaItalic, GeorgiaBold],
  all: [DmRegular, DmMedium, DmBold, GeorgiaRegular, GeorgiaItalic, GeorgiaBold],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "DM Sans";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "DM Sans";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "DM Sans";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[2]}) format("woff2");
        }
        @font-face {
            font-family: 'georgiaregular';
            src: url(${font[3]}) format("woff2");
            font-weight: 400;
            font-style: normal;

        }
        @font-face {
            font-family: 'georgiaitalic';
            src: url(${font[4]}) format("woff2");
            font-weight: 400;
            font-style: italic;

        }
        @font-face {
            font-family: 'georgiabold';
            src: url(${font[5]}) format("woff2");
            font-weight: 700;
            font-style: normal;
        }





      `}
    />
  );
};

export default connect(FontFace);
