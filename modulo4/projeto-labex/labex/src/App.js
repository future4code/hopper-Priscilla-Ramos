import React from "react";
import { Rotas } from "./Routes/Rotas"
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Rotas />
    </ThemeProvider>
  );
}

export default App;
