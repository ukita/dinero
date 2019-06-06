// Breakpoints
const breakpoints = ["640px", "768px", "1024px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

// Fonts
const fonts = {
  body: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  heading: "inherit"
};

// Font Sizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
fontSizes.body = `${fontSizes[2]}px`;

// Spacing
const space = [0, 4, 8, 16, 32, 64, 128, 256];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

// Line Heights
const lineHeights = [1, 1.125, 1.5];
lineHeights.body = 1.5;
lineHeights.heading = 1.25;

// Font Weight
const fontWeights = {
  light: 300,
  normal: 400,
  bold: 600
};

// Border Radius
export const radii = [0, 2, 4, 6];
export const radius = "4px";

// Box Shadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

// Colors
const baseColors = {
  white: "white",
  black: "black",

  teal: [
    "#EFFCF6", // 050
    "#C6F7E2", // 100
    "#8EEDC7", // 200
    "#65D6AD", // 300
    "#3EBD93", // 400
    "#27AB83", // 500
    "#199473", // 600
    "#147D64", // 700
    "#0C6B58", // 800
    "#014D40" // 900
  ],

  grey: [
    "#F0F4F8", // 050
    "#D9E2EC", // 100
    "#BCCCDC", // 200
    "#9FB3C8", // 300
    "#829AB1", // 400
    "#627D98", // 500
    "#486581", // 600
    "#334E68", // 700
    "#243B53", // 800
    "#102A43" // 900
  ],

  blue: [
    "#DCEEFB", // 050
    "#B6E0FE", // 100
    "#84C5F4", // 200
    "#62B0E8", // 300
    "#4098D7", // 400
    "#2680C2", // 500
    "#186FAF", // 600
    "#0F609B", // 700
    "#0A558C", // 800
    "#003E6B" // 900
  ],

  purple: [
    "#EAE2F8", // 050
    "#CFBCF2", // 100
    "#A081D9", // 200
    "#8662C7", // 300
    "#724BB7", // 400
    "#653CAD", // 500
    "#51279B", // 600
    "#421987", // 700
    "#34126F", // 800
    "#240754" // 900
  ],

  red: [
    "#FFEEEE", // 050
    "#FACDCD", // 100
    "#F29B9B", // 200
    "#E66A6A", // 300
    "#D64545", // 400
    "#BA2525", // 500
    "#A61B1B", // 600
    "#911111", // 700
    "#780A0A", // 800
    "#610404" // 900
  ],

  yellow: [
    "#FFFAEB", // 050
    "#FCEFC7", // 100
    "#F8E3A3", // 200
    "#F9DA8B", // 300
    "#F7D070", // 400
    "#E9B949", // 500
    "#C99A2E", // 600
    "#A27C1A", // 700
    "#7C5E10", // 800
    "#513C06" // 900
  ]
};

const colors = {
  ...baseColors,

  primary: baseColors.teal[5],
  text: baseColors.grey[9],
  link: baseColors.blue[9],
  background: baseColors.grey[0],

  // Old
  darkPrimary: "#0C6B58",

  lighterRed: "#c53030",
  red: "#fc8181",

  lighterGray: "#f5f7fa",
  lightGray: "#edf2f7",
  gray: "#8795a1",
  darkGray: "#4a5568",
  darkerGray: "#243B53"
};

const buttons = {
  primary: {
    text: baseColors.white,
    background: baseColors.teal[5],
    backgroundHover: baseColors.teal[7]
  },
  secondary: {
    text: baseColors.white,
    background: baseColors.grey[5],
    backgroundHover: baseColors.grey[7]
  },
  red: {
    text: baseColors.white,
    background: baseColors.red[5],
    backgroundHover: baseColors.red[7]
  }
};

export default {
  breakpoints,
  fonts,
  fontSizes,
  space,
  colors,
  fontWeights,
  lineHeights,
  radii,
  radius,
  boxShadows,
  buttons
};
