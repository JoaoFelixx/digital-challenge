export interface Theme {
  colors: {
    primaryColor: string;
    primaryColor10: string;
    primaryColor50: string;

    errorColor: string;

    neutralColor: string;
    neutralColor100: string;
    neutralColor200: string;
    neutralColor300: string;
    neutralColor400: string;

    neutralColor600: string;
    neutralColor700: string;

    neutralColor900: string;
    neutralColor1000: string;
    neutralColor1100: string;
    neutralColor1200: string;
  };
}


export const theme = (): Theme => ({
  colors: {
    primaryColor: "#CC6237",
    primaryColor10: "#CC62371A",
    primaryColor50: "#CC623780",

    neutralColor: "#FFFFFF",
    neutralColor100: "#F8F8F8",
    neutralColor200: "#F5F5F5",
    neutralColor300: "#F9FBFF",
    neutralColor400: "#F6F6F6",

    neutralColor600: "#a9a9a9",
    neutralColor700: "#657593",
        
    neutralColor900: "#00000033",
    neutralColor1000: "#0000001A",
    neutralColor1100: "#0000000D",
    neutralColor1200: "#000000",

    errorColor: "#FF2E2E",
  },
});;
