export interface Theme {
  colors: {
    white: string;
    offWhite: string;
    borderColor: string;
    darkOrange: string;
    loginForm: string;
  };
}


export const theme = (): Theme => ({
  colors: {
    white: "#FFFFFF",
    offWhite: "#F8F8F8",
    loginForm: "#F9FBFF",

    darkOrange: "#CC6237",

    borderColor: "#0000001A",
  },
});;
