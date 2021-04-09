import { Global, css, connect } from "frontity";
import DmRegular from "../../../fonts/dm-sans-v6-latin-regular.woff2";
import DmMedium from "../../../fonts/dm-sans-v6-latin-500.woff2";
import DmBold from "../../../fonts/dm-sans-v6-latin-700.woff2";


const fonts = {
  "us-ascii": [DmRegular, DmMedium, DmBold],
  latin: [DmRegular, DmMedium, DmBold],
  all: [DmRegular, DmMedium, DmBold],
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
      `}
    />
  );
};

export default connect(FontFace);
