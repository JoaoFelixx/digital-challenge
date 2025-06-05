export interface Theme {
  colors: {
    darkOrange: string;
    borderColor: string;
    offWhite: string;
    white: string;
  };
}



export const theme = (): Theme => ({
  colors: {
    darkOrange: "#CC6237",
    offWhite: "#F8F8F8",
    white: "#FFFFFF",

    borderColor: "#0000001A",
  },
});;
