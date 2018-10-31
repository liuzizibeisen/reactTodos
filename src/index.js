import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todos />, document.getElementById('root'));

serviceWorker.unregister();
