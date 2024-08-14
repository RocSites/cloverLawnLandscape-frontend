import logo from './logo.svg';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Layout from './components/Layout';
import Landing from './components/Landing';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Nursery from './components/Nursery';
import ContactUs from './components/ContactUs';
import Gentles from './components/Gentles';
import Landscaping from './components/Landscaping';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}>
          </Route>
          <Route path="/landscape" element={<Landscaping />}>
          </Route>
          <Route path="/nursery" element={<Nursery/>}>

          </Route>
        </Routes>
      </div>
    </Router>
    </ThemeProvider>

    //   <Routes>
    //     <Route path="/" component={Layout}>
    //       <>
    //         <div>Home page</div>
    //       </>
    //     </Route>
    //     <Route path="/landscape">
    //       <>
    //         <div className="App">
    //           <Layout>
    //             <SectionOne />
    //             <AboutUs />
    //             <SectionTwo />
    //             <Services />
    //             <Nursery />
    //             <SectionThree />
    //             <Gentles />
    //             <ContactUs />
    //           </Layout>
    //         </div>
    //       </>
    //     </Route>
    //   </Routes>
    // 

  );
}

export default App;
