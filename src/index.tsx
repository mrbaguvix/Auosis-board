import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MyThemeProvider } from "./utils/ThemeContext";
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';

ReactDOM.render(
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
