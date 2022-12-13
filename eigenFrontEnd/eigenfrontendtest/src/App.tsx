import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from  './presentation/view-implementations/container'
import { Title } from './domain/entity/models/const/Title';

function App() {
  return (
    <div className="App">
        <Container title={Title}/>
    </div>
  );
}

export default App;
