import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import Layout from './components/Layout.jsx'
import store  from './store'

const app = document.getElementById('app')


ReactDOM.render(
<Provider store={store.store}>
    <MuiThemeProvider>
        <PersistGate loading={null} persistor={store.persistor}>
            <Layout />
        </PersistGate>
    </MuiThemeProvider>
</Provider>
, app)