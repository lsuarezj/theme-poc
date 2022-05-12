import React, { useMemo, useState } from "react";
import "./App.css";
import {
  createTheme,
  CssBaseline,
  Grid,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { green, purple } from "@mui/material/colors";
import MyForm from "./components/MyForm";
import Editor from "@monaco-editor/react";
import ClientStyle from "./components/ClientStyle/ClientStyle";
import debounce from "lodash.debounce";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { Style } from "react-style-tag";

function App() {
  const [customCssTheme, setcustomCssTheme] = useState(``);
  const [customCssComponents, setcustomCssComponents] = useState(``);

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: customCssTheme,
    //   },
    // },
  });

  const setWrapper = (value: string, callback: Function) => {
    // console.log(value);
    // setcustomCssTheme(value);
    callback(value);
  };

  const debouncedSetCustomCssTheme = useMemo(() => {
    return debounce(setWrapper, 500);
  }, []);

  type StyleProps = {
    css: string;
  };

  const Style = (StyleProps: StyleProps) => (
    <ClientStyle css={StyleProps.css} />
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Style css={customCssTheme} />
      <Style css={customCssComponents} />
      <StyledEngineProvider injectFirst>
        <main>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MyForm></MyForm>
            </Grid>
            <Grid item xs={4}>
              <div>
                <label>Override Theme:</label>
                <Editor
                  height="400px"
                  width="100%"
                  language="css"
                  onChange={(value, event) => {
                    debouncedSetCustomCssTheme(
                      value as string,
                      setcustomCssTheme
                    );
                  }}
                  value={customCssTheme}
                  theme="vs-dark"
                  options={{
                    minimap: {
                      enabled: false,
                    },
                    colorDecorators: true,
                    lineNumbers: "on",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <label>Craete Component General:</label>
                <Editor
                  height="400px"
                  width="100%"
                  language="css"
                  onChange={(value, event) => {
                    debouncedSetCustomCssTheme(
                      value as string,
                      setcustomCssComponents
                    );
                  }}
                  value={customCssComponents}
                  theme="vs-dark"
                  options={{
                    minimap: {
                      enabled: false,
                    },
                    colorDecorators: true,
                    lineNumbers: "on",
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </main>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
