import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import Layout from './components/Layout.jsx'
import store  from './store'

const app = document.getElementById('app')

import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
    let overwrites = {
      "palette": {
          "primary1Color": "#c8e6c9",
          "accent1Color": "#c8e6c9",
          "canvasColor": "#eceff1",
          "shadowColor": "#4caf50",
          "borderColor": "#1b5e20",
          "pickerHeaderColor": "rgba(255, 255, 255, 0.11)",
          "textColor": "#1b5e20",
          "secondaryTextColor": "rgba(0, 105, 92, 0.81)",
          "alternateTextColor": "#2e7d32",
          "disabledColor": "rgba(0, 0, 0, 0.26)",
          "primary3Color": "#aeea00",
          "primary2Color": "#2e7d32"
      },
      "raisedButton": {
          "disabledColor": "#c5e1a5",
          "primaryTextColor": "#e0f2f1",
          "color": "#ccff90",
          "primaryColor": "#689f38"
      },
      "drawer": {
          "color": "#c8e6c9"
      },
      "flatButton": {
          "color": "#689f38",
          "textColor": "#e8f5e9"
      }
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