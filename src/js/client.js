import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import Layout from './components/Layout.jsx'
import store  from './store'

const app = document.getElementById('app')

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const getTheme = () => {
    let overwrites = {
      "palette": {
        "primary1Color": "#607d8b",
        "accent1Color": "#81d4fa",
        "borderColor": "#263238",
          "disabledColor": "rgba(0, 0, 0, 0.26)",
      },
      "raisedButton": {
          "disabledColor": "#cfd8dc",
          "primaryTextColor": "#e0f2f1",
          "primaryColor": "#90a4ae"
      },
      "drawer": {
          "color": "#90a4ae"
      },
      "flatButton": {
          "color": "#607d8b",
          "textColor": "#e8f5e9",
          "buttonFilterColor": "#263238",
      },
      
  };
    return getMuiTheme(baseTheme, overwrites);
  }

ReactDOM.render(
<Provider store={store.store}>
    <MuiThemeProvider muiTheme={getTheme()}>
        <PersistGate loading={null} persistor={store.persistor}>
            <Layout />
        </PersistGate>
    </MuiThemeProvider>
</Provider>
, app)