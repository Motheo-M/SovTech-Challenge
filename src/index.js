import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Contains method of finding element by ID 'root' */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Function will render my entire react webpage by using the ID 'root' */
root.render(
  <React.StrictMode>

    {/* Contains App.js class code */}
    <App />
  </React.StrictMode>
);

/* 
    To start measuring performance in your app 
    pass a function to log results
    (for example: reportWebVitals(console.log))
*/
reportWebVitals();
