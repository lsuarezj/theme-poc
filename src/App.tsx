import React, { useMemo, useState } from "react";
import "./App.css";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { green, purple } from "@mui/material/colors";
import MyForm from "./components/MyForm";
import Editor from "@monaco-editor/react";
import ClientStyle from "./components/ClientStyle/ClientStyle";
import debounce from "lodash.debounce";

function App() {
  const [customCss, setcustomCss] = useState(`.MuiSlider-colorPrimary {
  color: #1c4f4c;
}

.MuiSlider-colorSecondary {
  color: #f707ef;
}

.MuiSlider-colorPrimary:hover {
  color: #b4bf32;
}

.MuiSlider-colorSecondary:hover {
  color: #0dd8e3;
}

.MuiButton-containedPrimary {
  color: #fff;
  background-color: green;
}

.MuiButton-containedPrimary:hover {
  background-color: grey;
  color: #000;
  }`);

  const [customCssSecondLevel, setcustomCssSecondLevel] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const setWrapper = (value: string) => {
    // console.log(value);
    setcustomCss(value);
  };

  const debouncedSetCustomCss = useMemo(() => {
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
      <Style css={customCss} />
      <Style css={customCssSecondLevel} />
      <StyledEngineProvider injectFirst>
        <main>
          <MyForm></MyForm>
          <label>Override Theme:</label>
          <Editor
            height="400px"
            width="50%"
            language="css"
            onChange={(value, event) => {
              debouncedSetCustomCss(value as string);
            }}
            value={customCss}
            theme="vs-dark"
            options={{
              minimap: {
                enabled: false,
              },
              colorDecorators: true,
              lineNumbers: "on",
            }}
          />
        </main>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
