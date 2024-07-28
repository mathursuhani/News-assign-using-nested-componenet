import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import News2 from './News2.js'
import reportWebVitals from './reportWebVitals';
function News1(){
  return <>
          <p>PM Modi holds meet with BJP's Chief Ministers over different issues.</p>
          <News2/>
        </>
}
function App(){
  return <>
          <h1>Delhi Rain Update <News1></News1>
          </h1>
        </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
