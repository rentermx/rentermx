import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Home from './pages/Home';
import Location from './pages/Location'

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy'
  }
});

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "location", element: <Location /> }
  ]);
  return routes;
};



const AppWrapper  = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
}

export default AppWrapper ;
