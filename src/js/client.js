import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Provider } from 'react-redux'

import Layout from './components/Layout'
import store from './store'

const app = document.getElementById('app')

ReactDOM.render(
<Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Layout />
    </MuiThemeProvider>
</Provider>
, app)