export interface Theme {
  colors: {
    white: string;
    offWhite: string;
    silver: string;
    borderColor: string;
    darkOrange: string;
    loginForm: string;
    placeholderColor: string;
    inputColor: string;
    hasError: string;
  };
}


export const theme = (): Theme => ({
  colors: {
    white: "#FFFFFF",
    offWhite: "#F8F8F8",

    loginForm: "#F9FBFF",
    inputColor: "#F6F6F6",

    darkOrange: "#CC6237",

    borderColor: "#0000001A",

    silver: "#a9a9a9",

    placeholderColor: "#657593",

    hasError: "#FF2E2E",
  },
});;
