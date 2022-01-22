import React from 'react';
import './App.css';
import { Header } from './features/header/Header';
import { Claps } from './features/claps/Claps'
import { Input } from './features/input/Input';

function App() {
  return (
    <div>
      <Header title='Add Claps' />
      <div>
        <Input></Input>
        <Claps></Claps>
      </div>
    </div>
  );
}

export default App;
