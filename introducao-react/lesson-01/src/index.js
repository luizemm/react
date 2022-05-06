import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
import DivPai from './DivPai';
import Titulo from './Titulo';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DivPai>
    <Titulo setClock={2000} setName="Titulo mudou"></Titulo>
    <Button className="simpleBtn" onClick={() => alert("Botão simples foi apertado")} name="Botão simples"></Button>
  </DivPai>
);
reportWebVitals();
