import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import SectionOne from './components/SectionOne';
import { createTheme, ThemeProvider } from "@mui/material";
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import AboutUs from './components/AboutUs';

const cloverTheme = createTheme({
  palette: {
    primary: {
      main: "#00704a"
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
          <SectionOne />
          <SectionTwo />
          <AboutUs />
          <SectionThree />
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;
