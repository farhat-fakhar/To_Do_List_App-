import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./Component/Home/Home";

function App() {
  const theme = {
    colors: {
      greenColor: "#009f7f",
      bgColor: "#f3f4f6",
      borderColor: "#e5e7eb",
      textColor: "#333333",
      yellowColor: "#eab308",
      whiteColor: "#ffffff",
      menuColor: "#7E7E7E",
      headingColor: "#253D4E",
    },
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <Home/>
          <Routes></Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
