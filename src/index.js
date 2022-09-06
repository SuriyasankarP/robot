import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "tachyons";
import { robot } from './robot';
import Card from './card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
            <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
            <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
            <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
            <Card id={robot[3].id} name={robot[3].name} email={robot[3].email}/>
    </div>
    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
    