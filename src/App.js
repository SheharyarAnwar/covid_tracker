import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Main from "./Views/Main/index";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
