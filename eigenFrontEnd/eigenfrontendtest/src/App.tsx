import React from 'react';
import './App.css';
import { Title } from './domain/entity/models/const/Title';
import Container from './presentation/view-implementations/Container';

function App() {
  return (
    <div className="App">
        <Container title={Title}/>
    </div>
  );
}

export default App;
