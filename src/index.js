import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {App} from 'Containers';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Strict Mode - warns you of hurtful components, or problems in everything it encapsulates.\
 * BrowserRouter - Uses html5 history api (pushState, popState, ReplaceState) to keep the UI in sync with the URL
 * What would app need at this point? Is there anything that can be passed in?
 */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);
