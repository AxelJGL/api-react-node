import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, DynamicTable} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const dinamic = ReactDOM.createRoot(document.getElementById('table'));

dinamic.render(
    <DynamicTable/>
);

