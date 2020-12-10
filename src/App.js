import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { fetchCountriesData } from "./Utils/Suspense/index";
import Spinner from "./Utils/Spinner/index";
import Main from "./Views/Main/index";
import { Suspense } from "react";
const data = fetchCountriesData();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Main apiData={data} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
