import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Message(props) {
  return <h1 className='lala'>Привет, {props.name}</h1>;
}

const element = <Message name="REACT" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
function Apps() {
  return (
    <div>
      <Message name="JS" />
      <Message name="JSX" />
      <Message name="ReactJs" />
    </div>
  );

}

ReactDOM.render(
  <Apps />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
