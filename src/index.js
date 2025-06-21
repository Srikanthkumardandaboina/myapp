import React from 'react';
import ReactDOM from 'react-dom/client';

function App(props){
  return(
  <h1>Hello {props.name} {props.secondname}</h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Srikanth' secondname='Dandaboina'/>
  </React.StrictMode>
);


