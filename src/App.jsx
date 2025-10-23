import { CssBaseline, ThemeProvider, Box, Divider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import DIAPKA from "./component/DIAPKA";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Topbar from "./Header/Topbar";
import Skills from "./component/Skills";
  

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "background.default",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Topbar />
          <Box component="main" sx={{ flex: 1, pb: 40 }}>
            <Routes>
              <Route path="/" element={<DIAPKA />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/skills" element={<Skills />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
