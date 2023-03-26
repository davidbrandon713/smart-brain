import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from './components/Modal/Modal';
// import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
