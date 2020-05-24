import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import App from './components/App';
import store, {persistore} from './redux/store'


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
            <App/>
        </PersistGate>
    </Provider>,document.getElementById('root'))