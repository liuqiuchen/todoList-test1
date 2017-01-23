import { createStore } from 'redux';
import { Provider } from 'react-redux';
// react一定要引入进来，不然会报错
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/reducers';
//import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './actions/actions';
import App from './containers/App';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
