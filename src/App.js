import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import SectionOne from './components/SectionOne';
import { createTheme, ThemeProvider } from "@mui/material";

const cloverTheme = createTheme({
  palette: {
    primary: {
      main: "#004b32"
    },
    secondary: {
      main: "#44240a"
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={cloverTheme}>
    <div className="App">
     <Layout>
      <SectionOne/>
     </Layout>
    </div>
    </ThemeProvider>

  );
}

export default App;
