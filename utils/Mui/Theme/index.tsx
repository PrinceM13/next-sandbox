import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as state from "@/stores/valtio";
import { useSnapshot } from "valtio";

const CustomTheme: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color
}) => {
  const primay = useSnapshot(state.theme).primary;

  const theme = createTheme({
    palette: {
      primary: {
        main: color ?? primay
      },
      mode: "dark"
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
