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
    black: string;
    darkOrange10: string;
    darkOrange50: string;
    black20: string;
    buttonColorWhite: string;
    black5: string;
    black10: string;
  };
}


export const theme = (): Theme => ({
  colors: {
    white: "#FFFFFF",
    offWhite: "#F8F8F8",
    buttonColorWhite: "#F5F5F5",

    loginForm: "#F9FBFF",
    inputColor: "#F6F6F6",

    darkOrange: "#CC6237",
    darkOrange10: "#CC62371A",
    darkOrange50: "#CC623780",

    borderColor: "#0000001A",

    silver: "#a9a9a9",

    placeholderColor: "#657593",

    hasError: "#FF2E2E",

    black: "#000000",
    black5: "#0000000D",
    black10: "#0000001A",
    black20: "#00000033"
  },
});;
