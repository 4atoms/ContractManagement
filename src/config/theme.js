export const themeColors = {
  // Neutral
  white: "#ffffff",
  // Gray
  gray70: "#535353",

  // Red
  red10: "#FFF5F5",
  red20: "#FFE6E7",
  red30: "#FFD1D3",
  red40: "#FFA8AD",
  red50: "#FC888E",
  red60: "#EB5B63",
  red70: "#CF363D",
  red80: "#AD1D25",
  red90: "#6E070C",
  red100: "#3B0003",
  // Black
  black: "#000000",
  //purple
  purple: "#603bbb",
  blueInfo: "#6CC1FF",
  orangeWarning: "#FF7A00",
  greenSuccess: "#8FC827",
  redDanger: "#DB303F",

  //  Iris/60
  chartBarOddColor: "#A5A6F6",

  /* Fuschia/80 */
  chartBarEvenColor: "#F178B6",

  //tertiary color
  darkGray: "#9E9E9E",
};

export const primaryColor = themeColors.purple;
export const tertiaryColor = themeColors.darkGray;

// ************ BreakPoints ************
export const BreakPoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1452,
};

// Desktop Views
export const mdResStyles = (styles) => {
  return `@media (min-width: 769px) and (max-width: 992px) { ${styles} }`;
};

export const lgResStyles = (styles) => {
  return `@media (min-width: 993px) and (max-width: 1200px) { ${styles} }`;
};

export const xlResStyles = (styles) => {
  return `@media (min-width: 1201px) and (max-width: 1452px) { ${styles} }`;
};

export const xxlResStyles = (styles) => {
  return `@media only screen and (min-width: 1453px) { ${styles} }`;
};

export const desktopResStyles = (styles) => {
  return `
    ${mdResStyles(styles)}
    ${lgResStyles(styles)}
    ${xlResStyles(styles)}
    ${xxlResStyles(styles)}
  `;
};

// Mobile and Tab Views
export const xsResStyles = (styles) => {
  return `@media only screen and (max-width: 576px) { ${styles} }`;
};

export const smResStyles = (styles) => {
  return `@media (min-width: 577px) and (max-width: 768px) { ${styles} }`;
};

export const mobileAndTabResStyles = (styles) => {
  return `
    ${xsResStyles(styles)}
    ${smResStyles(styles)}
  `;
};
