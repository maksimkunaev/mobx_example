import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react'
import store from './store/'


const Root = <Provider toDoList={store}><App /></Provider>

ReactDOM.render(Root, document.getElementById('root'));
