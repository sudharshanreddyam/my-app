import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Content from './Content';
import Footer from './Footer';
import Title from './Title';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(<div><Title title='Hello React!'/><Content/><Footer/></div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
