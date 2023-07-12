import logo from './logo.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Layout from './components/Layout';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Nursery from './components/Nursery';
import ContactUs from './components/ContactUs';
import Gentles from './components/Gentles';

const cloverTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
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
          <AboutUs />
          <SectionTwo />
          <Services />
          <Nursery/>
          <SectionThree />
          <Gentles/>
          <ContactUs/>
        </Layout>
      </div>
    </ThemeProvider>

  );
}

export default App;
