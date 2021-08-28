import logo from './logo.svg';
import "./styles/globalStyles.css";
import { css } from "styled-components/macro"; //eslint-disable-line
import "./tailwind.config"
import {BrowserRouter, Switch, Route} from "react-router-dom" 

import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
