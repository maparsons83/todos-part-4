import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import {todosReducer} from './reducer.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { connect } from 'http2';

const store = createStore(todosReducer)

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

export default connect(mapStateToProps)(App)
