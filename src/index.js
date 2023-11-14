import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



// dtoon Description Reducer
const dtoonDescription = (state = 'Testing...', action) => {
    if(action.type === 'SHOW_CARD') {
        return action.payload;
    }
    return state;
}



const reduxStore = createStore(
    combineReducers({
        dtoonDescription
    }),
    applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={reduxStore}>
            <App />
        </Provider>
);


