
// ***************** IMPORTS ********************** //


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// saga Step 1 - imports
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


// ***************** IMPORTS ********************** //











// ***************** REDUCERS ********************** //

// SET_ADMIN_CARDS
const adminCards = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_CARDS':
            return action.payload;
        default:
            return state;
    }
}


// Admin Card Details
const adminCardDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_CARD_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// GET set type_kind table
const setTypeKindTable = (state = [], action) => {
    switch (action.type) {
        case 'SET_TYPE_KIND_TABLE':
            return action.payload;
        default:
            return state;
    }
}

// ***************** REDUCERS ********************** //











// ***************** SAGAS ********************** //

// GET for Admin Card List /admin/dtoons
function* fetchAdminCardList() {
    try {
        const response = yield axios.get('/admin/dtoons');
        const action = { type: 'SET_ADMIN_CARDS', payload: response.data }
        yield put(action);

    } catch (error) {
        console.log(`error GET /dtoons fetching admin card list`, error);
        alert(`error GET /??? fetching admin card list`);
    }
}

// GET admin card details /admin/dtoonDetails/:id
function* returnAdminCardDetails(action) {
    try {
        const response = yield axios.get(`/admin/dtoonDetails/${action.payload}`);
        yield put({ type: 'SET_ADMIN_CARD_DETAILS', payload: response.data })
    } catch (error) {
        console.log(`error in returning admin details`, error);
        alert(`error in returning admin details`);
    }
}

// GET type_kind table for addDtoons form
function* getTypeKindTable() {
    try {
        const response = yield axios.get('/admin/type_kind');
        const action = { type: 'SET_TYPE_KIND_TABLE', payload: response.data }
        yield put(action);

    } catch (error) {
        console.log(`error GET type kind table`);
        alert(`unable to get type_kind table`);
    }
}








// POST admin New Dtoon /admin
function* adminPostDtoon(action) {
    try {
        yield axios.post('/admin', action.payload);
        yield put({ type: 'FETCH_ADMIN_CARDS' });

    } catch (error) {
        console.log(`error in admin POST /dtoons`, error);
        alert(`error in admin POST /dtoons`);
    }
}








// DELETE Admin Card List /admin/:id
function* adminDeleteDtoon(action) {
    try {
        yield axios.delete(`/admin/${action.payload}`);
        yield put({ type: 'FETCH_ADMIN_CARDS'});

    } catch (error) {
        console.log(`error admin DELETE dtoon`, error);
        alert(`error admin DELETE dtoon`);
    }
}



// ***************** SAGAS ********************** //








// ***************** ROOT SAGA & STORE ********************** //


function* rootSaga() {
    // all sagas here
    yield takeLatest('FETCH_ADMIN_CARDS', fetchAdminCardList);
    yield takeLatest('ADMIN_DELETE_DTOON', adminDeleteDtoon);
    yield takeLatest('ADMIN_POST_DTOON', adminPostDtoon);
    yield takeLatest('ADMIN_CARD_DETAILS', returnAdminCardDetails);
    yield takeLatest('GET_TYPE_KIND_TABLE', getTypeKindTable);

}

const sagaMiddleware = createSagaMiddleware();


const reduxStore = createStore(
    combineReducers({
        adminCards,
        setTypeKindTable,
        adminCardDetails
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


// ***************** ROOT SAGA & STORE ********************** //












// ***************** APP ********************** //



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={reduxStore}>
            <App />
        </Provider>
);


