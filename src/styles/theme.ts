const space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
};

const colors = {
  // new
  black: '#000',
  white: '#fff',

  gray50: '#F7FAFC',
  gray100: '#EDF2F7',
  gray200: '#E2E8F0',
  gray300: '#CBD5E0',
  gray400: '#A0AEC0',
  gray500: '#718096',
  gray600: '#4A5568',
  gray700: '#2D3748',
  gray800: '#1A202C',
  gray900: '#171923',

  orange50: '#FFFAF0',
  orange100: '#FEEBC8',
  orange200: '#FBD38D',
  orange300: '#F6AD55',
  orange400: '#ED8936',
  orange500: '#DD6B20',
  orange600: '#C05621',
  orange700: '#9C4221',
  orange800: '#7B341E',
  orange900: '#652B19',

  yellow50: '#FFFFF0',
  yellow100: '#FEFCBF',
  yellow200: '#FAF089',
  yellow300: '#F6E05E',
  yellow400: '#ECC94B',
  yellow500: '#D69E2E',
  yellow600: '#B7791F',
  yellow700: '#975A16',
  yellow800: '#744210',
  yellow900: '#5F370E',

  green50: '#F0FFF4',
  green100: '#C6F6D5',
  green200: '#9AE6B4',
  green300: '#68D391',
  green400: '#48BB78',
  green500: '#38A169',
  green600: '#2F855A',
  green700: '#276749',
  green800: '#22543D',
  green900: '#1C4532',

  teal50: '#E6FFFA',
  teal100: '#B2F5EA',
  teal200: '#81E6D9',
  teal300: '#4FD1C5',
  teal400: '#38B2AC',
  teal500: '#319795',
  teal600: '#2C7A7B',
  teal700: '#285E61',
  teal800: '#234E52',
  teal900: '#1D4044',

  blue50: '#EBF8FF',
  blue100: '#CEEDFF',
  blue200: '#90CDF4',
  blue300: '#63B3ED',
  blue400: '#4299E1',
  blue500: '#3182CE',
  blue600: '#2A69AC',
  blue700: '#1E4E8C',
  blue800: '#153E75',
  blue900: '#1A365D',

  cyan50: '#EDFDFD',
  cyan100: '#C4F1F9',
  cyan200: '#9DECF9',
  cyan300: '#76E4F7',
  cyan400: '#0BC5EA',
  cyan500: '#00B5D8',
  cyan600: '#00A3C4',
  cyan700: '#0987A0',
  cyan800: '#086F83',
  cyan900: '#065666',

  purple50: '#FAF5FF',
  purple100: '#E9D8FD',
  purple200: '#D6BCFA',
  purple300: '#B794F4',
  purple400: '#9F7AEA',
  purple500: '#805AD5',
  purple600: '#6B46C1',
  purple700: '#553C9A',
  purple800: '#44337A',
  purple900: '#322659',

  pink50: '#FFF5F7',
  pink100: '#FED7E2',
  pink200: '#FBB6CE',
  pink300: '#FBB6CE',
  pink400: '#ED64A6',
  pink500: '#D53F8C',
  pink600: '#B83280',
  pink700: '#97266D',
  pink800: '#702459',
  pink900: '#521B41',

  red50: '#FFF5F5',
  red100: '#FED7D7',
  red200: '#FEB2B2',
  red300: '#FC8181',
  red400: '#F56565',
  red500: '#E53E3E',
  red600: '#C53030',
  red700: '#9B2C2C',
  red800: '#822727',
  red900: '#63171B',
};
const fonts = ['Helvetica, sans-serif', 'Roboto, sans-serif'];
const fontSizes = [
  6, 8, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64,
];
const modalSizes = {
  sm: {
    'max-width': '700px',
    padding: 24,
    height: '50vh',
    'border-radius': '20px',
  },
  md: {
    'max-width': '1000px',
    padding: 36,
    height: '70vh',
    'border-radius': '24px',
  },
  lg: {
    'max-width': '1400px',
    padding: 42,
    height: '90vh',
    'border-radius': '28px',
  },
};
const shadows = {};

const theme = {
  shadows,
  modalSizes,
  fontSizes,
  fonts,
  colors,
  space,
};

export function getThemeColor(props, color: string): string {
  return props.theme.colors[color];
}
export function getThemeFontFamily(props, ff: number): string {
  return props.theme.fonts[ff];
}
export function getThemeFontSize(props, fontSize: number): number {
  return props.theme.fontSizes[fontSize];
}
export function getThemeSpace(props, spaceIndex: number): number {
  return props.theme.space[spaceIndex];
}

const getColor = (themeVersion) => (lightColor, darkColor) =>
  themeVersion === 'light' ? theme.colors[lightColor] : theme.colors[darkColor];

export const getTheme = (themeVersion) => {
  return { ...theme, getColor: getColor(themeVersion) };
};
export default theme;
