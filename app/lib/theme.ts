import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import { createTheme } from "@material-ui/core/styles";

const themeDark = createTheme({
  palette: {
    primary: { main: green[200] },
    secondary: { main: blue[400] },
    type: "dark",
  },
});

const themeLight = createTheme({
  palette: {
    primary: { main: green[800] },
    secondary: { main: blue[900] },
    type: "light",
  },
});

export { themeDark, themeLight };
